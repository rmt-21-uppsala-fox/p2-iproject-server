const { verifyToken } = require("../helpers/jwt");
const { User, Transaction, DetailTransaction } = require("../models");

const authN = async (req, res, next) => {
  try {
    const { access_token } = req.headers;
    const payload = verifyToken(access_token);

    const userData = await User.findByPk(payload.id);

    if (!userData)
      throw {
        name: "Login Error",
        message: "User not found",
      };

    req.userCredentials = {
      id: userData.id,
      email: userData.email,
    };

    next();
  } catch (error) {
    next(error);
  }
};

const authZ = async (req, res, next) => {
  try {
    const UserId = req.userCredentials.id;
    const { id } = req.params;

    const [transaction] = await Transaction.findOrCreate({
      where: [{ UserId }, { status: "Unstaged" }],
      defaults: {
        code: `FAP-#${new Date().getTime()}`,
        UserId,
      },
    });

    const product = await DetailTransaction.findByPk(id, {
      where: { TransactionId: transaction.id },
    });

    if (!product)
      throw {
        name: "Not Found",
        message: "Product not found",
      };

    if (product.TransactionId !== transaction.id)
      throw {
        name: "Forbidden",
        message: "You are not authorized",
      };
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = { authN, authZ };
