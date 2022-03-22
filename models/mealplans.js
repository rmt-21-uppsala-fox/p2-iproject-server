'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MealPlans extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  MealPlans.init({
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
    meals: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Meals is required'
        },
        notEmpty: {
          msg: 'Meals is required'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'MealPlans',
  });
  return MealPlans;
};