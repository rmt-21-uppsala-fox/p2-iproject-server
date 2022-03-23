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
      Game.belongsToMany(models.User, { through: models.GamesCollection });
    }
  }
  Game.init(
    {
      name: DataTypes.STRING,
      background_image: DataTypes.STRING,
      released: DataTypes.STRING,
      rating: DataTypes.STRING,
      description: DataTypes.TEXT,
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
