"use strict";
const { Model } = require("sequelize");
const { hashPw } = require("../helpers/bcrypt");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Post, { foreignKey: "UserId" }),
        User.hasOne(models.Post, { foreignKey: "totalLike" }),
        User.belongsToMany(models.Post, {
          through: models.Comment,
          foreignKey: "UserId",
        });
    }
  }
  User.init(
    {
      email: {
        type: DataTypes.STRING,
        unique: { msg: "this email is already registered" },
        allowNull: false,
        validate: {
          notNull: { msg: "Email is required" },
          notEmpty: { msg: "Email is required" },
          isEmail: { msg: "Invalid Email" },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Password is required" },
          notEmpty: { msg: "Password is required" },
        },
      },
      username: {
        type: DataTypes.STRING,
        unique: { msg: "this username is already registered" },
        allowNull: false,
        validate: {
          notNull: { msg: "Username is required" },
          notEmpty: { msg: "Username is required" },
        },
      },
      profilePict: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Profile picture is required" },
          notEmpty: { msg: "Profile picture is required" },
        },
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );

  User.beforeCreate((instance) => {
    instance.password = hashPw(instance.password);
  });
  return User;
};
