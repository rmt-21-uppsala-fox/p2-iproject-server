'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Favorite extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Favorite.belongsTo(models.User, { foreignKey: "UserId" })
    }
  }
  Favorite.init({
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    leagueName: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'Favorite',
  });
  return Favorite;
};