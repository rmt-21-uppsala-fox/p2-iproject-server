'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class GamesStore extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  GamesStore.init({
    GameId: DataTypes.INTEGER,
    StoreId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'GamesStore',
  });
  return GamesStore;
};