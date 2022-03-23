const { Cart } = require("../models");

async function AuthZ(req, res, next) {
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
      return el.UserUID !== req.user.id;
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

module.exports = AuthZ;
