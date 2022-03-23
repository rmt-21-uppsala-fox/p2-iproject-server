"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Game extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Game.belongsToMany(models.User, { through: models.Wishlist });
    }
  }
  Game.init(
    {
      name: DataTypes.STRING,
      gameId: DataTypes.INTEGER,
      price: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Game",
    }
  );
  return Game;
};
