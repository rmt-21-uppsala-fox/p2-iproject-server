"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Cart.belongsTo(models.WalletCard);
    }
  }
  Cart.init(
    {
      WalletCardId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: "WalletCardId is required",
          },
          notNull: {
            msg: "WalletCardId is required",
          },
        },
      },
      UserUID: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "UserUID is required",
          },
          notNull: {
            msg: "UserUID is required",
          },
        },
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Status is required",
          },
          notNull: {
            msg: "Status is required",
          },
        },
      },
      invoiceId: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "Cart",
    }
  );
  return Cart;
};
