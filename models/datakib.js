'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DataKib extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  DataKib.init({
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    dateBuy: DataTypes.DATE,
    merk: DataTypes.STRING,
    originOfFounds: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'DataKib',
  });
  return DataKib;
};