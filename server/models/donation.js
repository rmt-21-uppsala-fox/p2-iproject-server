"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Donation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Donation.init(
    {
      title: DataTypes.STRING,
      imageUrl: DataTypes.STRING,
      target: DataTypes.INTEGER,
      collectedFunds: DataTypes.INTEGER,
      bankAccount: DataTypes.STRING,
      story: DataTypes.TEXT,
      region: DataTypes.STRING,
      AdminId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Donation",
    }
  );
  return Donation;
};
