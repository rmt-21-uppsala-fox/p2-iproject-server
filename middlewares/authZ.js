const { Cart } = require("../models");

class AuthZ {
  static async cancelingMyCart(req, res, next) {
    try {
      const { id } = req.params;
      const myCart = await Cart.findByPk(id);
      if (!myCart || myCart.status !== "IN_CART") {
        throw {
          name: "Not Found",
          message: "Cart not found",
        };
      }
      const checkId = myCart.UserUID !== req.user.uid;
      if (checkId) {
        throw {
          name: "Forbidden",
          message: "You are not authorized",
        };
      }
      next();
    } catch (err) {
      next(err);
    }
  }
  static async cancelingInvoice(req, res, next) {
    try {
      const { invoiceId } = req.params;
      const myCart = await Cart.findAll({
        where: {
          UserUID: req.user.uid,
          invoiceId,
          status: "PENDING",
        },
      });
      if (myCart.length < 1) {
        throw {
          name: "Not Found",
          message: "Cart not found",
        };
      }
      const checkId = myCart.some((el) => {
        return el.UserUID !== req.user.uid;
      });
      if (checkId) {
        throw {
          name: "Forbidden",
          message: "You are not authorized",
        };
      }
      next();
    } catch (err) {
      next(err);
    }
  }
}

module.exports = AuthZ;
