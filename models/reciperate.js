'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RecipeRate extends Model {
    static associate(models) {
      RecipeRate.belongsTo(models.User)
    }
  }
  RecipeRate.init({
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
    rate: {
      type: DataTypes.INTEGER
    }
  }, {
    sequelize,
    modelName: 'RecipeRate',
  });
  return RecipeRate;
};