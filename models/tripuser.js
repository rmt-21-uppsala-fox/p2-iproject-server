'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TripUser extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      TripUser.belongsTo(models.User,{foreignKey:"UserId"});
      TripUser.belongsTo(models.Trip,{foreignKey:"TripId"});
    }
  }
  TripUser.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: "price is required",
        },
        notEmpty: {
          args: true,
          msg: "price is required",
        },
      },
    },
    TripId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: "price is required",
        },
        notEmpty: {
          args: true,
          msg: "price is required",
        },
      },
    },
  }, {
    sequelize,
    modelName: 'TripUser',
  });
  return TripUser;
};