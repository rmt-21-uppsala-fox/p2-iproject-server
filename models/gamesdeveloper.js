'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class GamesDeveloper extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  GamesDeveloper.init({
    GameId: DataTypes.INTEGER,
    DeveloperId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'GamesDeveloper',
  });
  return GamesDeveloper;
};