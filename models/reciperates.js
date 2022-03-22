'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RecipeRates extends Model {
    static associate(models) {
      RecipeRates.belongsTo(models.User)
    }
  }
  RecipeRates.init({
    rate: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Rate is required'
        },
        notEmpty: {
          msg: 'Rate is required'
        }
      }
    },
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'User id is required'
        },
        notEmpty: {
          msg: 'User id is required'
        }
      }
    },
    RecipeId: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Recipe id is required'
        },
        notEmpty: {
          msg: 'Recipe id is required'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'RecipeRates',
  });
  return RecipeRates;
};