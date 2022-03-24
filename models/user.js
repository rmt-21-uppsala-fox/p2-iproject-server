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
      User.hasMany(models.Playlist)
    }
  }
  User.init({
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        msg: 'Your email has been used'
      },
      validate:{
        notNull: {
          msg: 'Please enter your email'
        },
        notEmpty: {
          msg: 'Please enter your email'
        },
        isEmail: {
          msg: 'Must be a valid email'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notNull: {
          msg: 'Please enter your password'
        },
        notEmpty: {
          msg: 'Please enter your password'
        },
        len:{
          args: [5],
          msg: 'Minimum 5 digit'
        }
      }
    },
  }, {
    hooks: {
      beforeCreate: (user, options) => {
        user.password = hashPass(user.password);
        if(!user.role){
          user.role = 'Admin'
        }
      }
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};