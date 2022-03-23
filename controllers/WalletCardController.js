const XenditInvoice = require("../API/xendit");
const { Cart, WalletCard } = require("../models");

class WalletCardController {
  static async getWalletCards(req, res, next) {
    try {
      const wallets = await WalletCard.findAll();
      res.status(200).json(wallets);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
  static async postCart(req, res, next) {
    try {
      const { id } = req.params;
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
        WalletCardId: id,
        status: "IN_CART",
      });
      res.status(201).json(newCart);
    } catch (err) {
      next(err);
    }
  }
  static async getMyCart(req, res, next) {
    try {
      let myCart = await Cart.findAll({
        where: {
          UserUID: req.user.uid,
          status: "IN_CART",
        },
        include: {
          model: WalletCard,
        },
      });
      const totalPrice = myCart.reduce((acc, curr) => {
        return curr.WalletCard.price + acc;
      }, 0);
      res.status(200).json({ myCart, totalPrice });
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
      console.log(uid, totalPrice);
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
      console.log(err?.message || err);
      res.status(500).json(err?.message || err);
    }
  }
  static async updateInvoiceCart(req, res, next) {
    try {
      const { invoiceId, status } = req.invoice;
      await Cart.update({ status }, { where: { invoiceId } });
    } catch (err) {
      console.log(err?.message || err);
      res.status(500).json(err?.message || err);
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

      res.send(200).json({
        message: "Invoice has been successfully updated to expired",
      });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = WalletCardController;
