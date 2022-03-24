"use strict";
const { Model } = require("sequelize");
const { hashPassword } = require("../helpers/bcrypt.js");
module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Customer.hasMany(models.Ballroom, { foreignKey: "customerId" });
    }
  }
  Customer.init(
    {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Username cannot be empty",
          },
          notEmpty: {
            msg: "Username cannot be empty",
          },
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Email cannot be empty",
          },
          notEmpty: {
            msg: "Email cannot be empty",
          },
          isEmail: {
            msg: "Email input must be email format",
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Password cannot be empty",
          },
          notEmpty: {
            msg: "Password cannot be empty",
          },
          len: {
            args: [5, 20],
            msg: `Password length must be between 5-20`,
          },
        },
      },
    },
    {
      sequelize,
      modelName: "Customer",
    }
  );
  Customer.beforeCreate((instance, options) => {
    instance.password = hashPassword(instance.password);
  });
  return Customer;
};
