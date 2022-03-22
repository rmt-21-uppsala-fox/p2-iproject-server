"use strict";
const { Model } = require("sequelize");
const { hashPass } = require(`../helpers/bcrypt`);
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.belongsToMany(models.Game, {through: models.UsersGame})
    }
  }
  User.init(
    {
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
          msg: `Email must be unique`,
        },
        validate: {
          notEmpty: {
            msg: `Email is required`,
          },
          notNull: {
            msg: `Email is required`,
          },
          isEmail: {
            msg: `Format email is incorrect`,
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
          msg: `Email must be unique`,
        },
        validate: {
          len: {
            args: [5, 42],
            msg: `Password length min 5 characters`,
          },
          notEmpty: {
            msg: `Password is required`,
          },
          notNull: {
            msg: `Password is required`,
          },
        },
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
          msg: `Username must be unique`,
        },
        validate: {
          notEmpty: {
            msg: `Username is required`,
          },
          notNull: {
            msg: `Username is required`,
          },
        },
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  User.beforeCreate((instance, options) => {
    instance.password = hashPass(instance.password);
  });
  return User;
};
