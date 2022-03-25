'use strict';
const {
  Model
} = require('sequelize');
const { hashPassword } = require('../helper/bcrypt');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Weight, { foreignKey: "userId" });
    }
  }
  User.init({
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: {
          msg: 'email cannot be empty or null'
        },
        isEmail: {
          args: true,
          msg: 'Please input email format correctly (example@yahoo.com)'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'password cannot null'
        },
        len: {
          args: [5, 20],
          msg: `Password must containt with 5 Characters Minimum and 20 Maximum`
        }
      }
    },
  }, {
    sequelize,
    modelName: 'User',
  });
  User.beforeCreate(function(instance, option){
    instance.password = hashPassword(instance.password)
  })

  return User;
};