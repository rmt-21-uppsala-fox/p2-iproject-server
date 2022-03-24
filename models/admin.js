"use strict";
const { Model } = require("sequelize");
const { hashPassword } = require("../helpers/helper");
module.exports = (sequelize, DataTypes) => {
  class Admin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Admin.init(
    {
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      imageUrl: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Admin",
      hooks: {
        beforeCreate(instance, option) {
          instance.password = hashPassword(instance.password);
        },
      },
    }
  );
  return Admin;
};
