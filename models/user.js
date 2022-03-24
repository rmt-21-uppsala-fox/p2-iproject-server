"use strict";
const { hash } = require("../helpers/bcrypt");
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsToMany(models.Inn, { through: models.Destination });
    }
  }
  User.init(
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        isEmail: true,
        validate: {
          notEmpty: {
            msg: "username of user is required",
          },
          notNull: {
            msg: "username of user is required",
          },
        },
      },
      phoneNumber: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          notEmpty: {
            msg: "username of user is required",
          },
          notNull: {
            msg: "username of user is required",
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "password of user is required",
          },
          notNull: {
            msg: "password of user is required",
          },
          len: {
            args: [5, 20],
            msg: `Password length must be between 5-20`,
          },
        },
      },
    },
    {
      hooks: {
        beforeCreate: (instance) => {
          instance.password = hash(instance.password);
        },
      },
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
