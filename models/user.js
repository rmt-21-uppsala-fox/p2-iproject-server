'use strict';
const {
  Model
} = require('sequelize');
const { hashPassword } = require('../helpers/bcrypt');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.UserMovie)
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
    hooks: {
      beforeCreate:(userData) => {//sebelum masuk database
        console.log(userData.password)
        
        let hashed = hashPassword(userData.password)//acak password sebelum masuk database
        userData.password = hashed//ubah password pada userData jadi hasil hashed
      }
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};