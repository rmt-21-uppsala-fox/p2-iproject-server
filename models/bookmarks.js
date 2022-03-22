'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bookmarks extends Model {
    static associate(models) {
      Bookmarks.belongsTo(models.User)
    }
  }
  Bookmarks.init({
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
    modelName: 'Bookmarks',
  });
  return Bookmarks;
};