'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Game extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Game.belongsToMany(models.User, {through: models.UsersGame})
    }
  }
  Game.init({
    name: DataTypes.STRING,
    rating: DataTypes.INTEGER,
    released: DataTypes.STRING,
    backgroundImage: DataTypes.STRING,
    ShortScreenshotId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Game',
  });
  return Game;
};