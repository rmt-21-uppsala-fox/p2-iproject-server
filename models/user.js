'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        
        notEmpty: {
          msg: 'username required'
        },
        notNull: {
          msg: 'username cannot be null'
        },

      },
      
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        msg: 'email must be unique'
      },
      validate: {
        isEmail: {
          msg: 'invalid email format '
        },
        notEmpty: {
          msg: 'email required'
        },
        notNull: {
          msg: 'email cannot be null'
        },
        
      },
      
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        
        notEmpty: {
          msg: 'password required'
        },
        notNull: {
          msg: 'password cannot be null'
        }
      }
    },
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};