'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class GamesGenre extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  GamesGenre.init({
    GameId: DataTypes.INTEGER,
    GenreId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'GamesGenre',
  });
  return GamesGenre;
};