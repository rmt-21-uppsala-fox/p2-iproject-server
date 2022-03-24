const { Op } = require("sequelize");
const XenditInvoice = require("../API/xendit");
const { Cart, WalletCard } = require("../models");

class MyCartController {
  static async postCart(req, res, next) {
    try {
      const { walletCardId } = req.params;
      const pendingCart = Cart.findOne({
        where: {
          UserUID: req.user.uid,
          status: "PENDING",
        },
      });
      const count = Cart.count({
        where: {
          UserUID: req.user.uid,
          status: "IN_CART",
        },
      });
      if (await pendingCart) {
        throw {
          name: "Bad Request",
          message: "You have a pending cart, please complete it first",
        };
      }
      if ((await count) > 9) {
        throw {
          name: "Bad Request",
          message: "You have too many items in cart, please complete it first",
        };
      }
      const newCart = await Cart.create({
        UserUID: req.user.uid,
        WalletCardId: walletCardId,
        status: "IN_CART",
      });
      res.status(201).json(newCart);
    } catch (err) {
      next(err);
    }
  }
  static async getMyCart(req, res, next) {
    try {
      let { count, rows: myCart } = await Cart.findAndCountAll({
        where: {
          UserUID: req.user.uid,
          status: {
            [Op.or]: ["IN_CART", "PENDING"],
          },
        },
        include: {
          model: WalletCard,
        },
      });
      const checkPending = myCart.find((el) => el.status === "PENDING");
      let invoice;
      if (checkPending) {
        invoice = await XenditInvoice.getInvoice(myCart[0].invoiceId);
      }
      const totalPrice = myCart.reduce((acc, curr) => {
        return curr.WalletCard.price + acc;
      }, 0);
      res.status(200).json({ count, myCart, totalPrice, invoice });
    } catch (err) {
      next(err);
    }
  }
  static async checkoutCart(req, res, next) {
    try {
      const { uid } = req.user;
      let myCart = await Cart.findAll({
        where: {
          UserUID: req.user.uid,
          status: "IN_CART",
        },
        include: [WalletCard],
      });
      const totalPrice = myCart.reduce((acc, curr) => {
        return curr.WalletCard.price + acc;
      }, 0);
      if (totalPrice < 1) {
        throw {
          name: "Bad Request",
          message: "You have no items in cart",
        };
      }
      const invoice = await XenditInvoice.createInvoice(uid, totalPrice);
      await Cart.update(
        { status: "PENDING", invoiceId: invoice.id },
        {
          where: {
            UserUID: req.user.uid,
            status: "IN_CART",
          },
        }
      );
      res.status(200).json(invoice);
    } catch (err) {
      next(err);
    }
  }
  static async updateInvoiceCart(req, res, next) {
    try {
      const { invoiceId, status } = req.invoice;
      await Cart.update({ status }, { where: { invoiceId } });
      res.status(200).send({ message: "OK" });
    } catch (err) {
      next(err);
    }
  }
  static async setExpireInvoice(req, res, next) {
    try {
      const { invoiceId } = req.params;
      await XenditInvoice.expireInvoice(invoiceId);
      await Cart.update(
        { status: "EXPIRED" },
        {
          where: {
            UserUID: req.user.uid,
            invoiceId,
            status: "PENDING",
          },
        }
      );
      res.status(200).json({
        message: "Invoice has been successfully updated to expired",
      });
    } catch (err) {
      next(err);
    }
  }
  static async cancelMyCart(req, res, next) {
    try {
      const { id } = req.params;
      await Cart.update({ status: "CANCELLED" }, { where: { id } });
      res
        .status(200)
        .json({ message: "Wallet card has been successfully cancelled" });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = MyCartController;
