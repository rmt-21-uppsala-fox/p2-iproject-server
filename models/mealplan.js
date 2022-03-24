'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MealPlan extends Model {
    static associate(models) {
      MealPlan.belongsTo(models.User)
    }
  }
  MealPlan.init({
    RecipeId: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Recipe id is required'
        },
        notEmpty: {
          msg: 'Recipe id is required'
        },
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
        },
      }
    },
    meals: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Meals is required'
        },
        notEmpty: {
          msg: 'Meals is required'
        },
      }
    }
  }, {
    sequelize,
    modelName: 'MealPlan',
  });
  return MealPlan;
};