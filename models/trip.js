'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Trip extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Trip.belongsToMany(models.User,{
        foreignKey: "UserId",
        through: models.TripUser
      })
    }
  }
  Trip.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: "Email is required",
        },
        notEmpty: {
          args: true,
          msg: "Name is required",
        },
      },
    },
    imgUrl: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: "imgUrl is required",
        },
        notEmpty: {
          args: true,
          msg: "imgUrl is required",
        },
      },
    },
    price: {
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
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: "description is required",
        },
        notEmpty: {
          args: true,
          msg: "description is required",
        },
      },
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: "date is required",
        },
        notEmpty: {
          args: true,
          msg: "date is required",
        },
      },
    }
  }, {
    sequelize,
    modelName: 'Trip',
  });
  return Trip;
};