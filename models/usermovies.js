'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserMovies extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UserMovies.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        
        notEmpty: {
          msg: 'title is required'
        },
        notNull: {
          msg: 'title cannot be null'
        }
      }
    },
    imdbId:  {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        
        notEmpty: {
          msg: 'synopsis is required'
        },
        notNull: {
          msg: 'synopsis cannot be null'
        }
      }
    },
    synopsis:  {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        
        notEmpty: {
          msg: 'synopsis is required'
        },
        notNull: {
          msg: 'synopsis cannot be null'
        }
      }
    },
    price: DataTypes.INTEGER,
    UserId: {
      type:  DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
  }, {
    sequelize,
    modelName: 'UserMovies',
  });
  return UserMovies;
};