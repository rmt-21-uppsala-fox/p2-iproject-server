"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Inn extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Inn.belongsToMany(models.User, { through: models.Destination });
    }
  }
  Inn.init(
    {
      name: DataTypes.STRING,
      location: DataTypes.STRING,
      price: DataTypes.INTEGER,
      description: DataTypes.STRING,
      imgUrl: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Inn",
    }
  );
  return Inn;
};
