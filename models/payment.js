"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Payment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Payment.init(
    {
      code: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: "Code is required",
          },
          notEmpty: {
            args: true,
            msg: "Code is required",
          },
        },
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: "Description is required",
          },
          notEmpty: {
            args: true,
            msg: "Description is required",
          },
        },
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: "Status is required",
          },
          notEmpty: {
            args: true,
            msg: "Status is required",
          },
        },
      },
      TransactionId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: "TransactionId is required",
          },
          notEmpty: {
            args: true,
            msg: "TransactionId is required",
          },
        },
      },
      amount: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: "Amount is required",
          },
          notEmpty: {
            args: true,
            msg: "Amount is required",
          },
        },
      },
      invoiceUrl: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: "InvoiceUrl is required",
          },
          notEmpty: {
            args: true,
            msg: "InvoiceUrl is required",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "Payment",
    }
  );
  return Payment;
};
