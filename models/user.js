'use strict';
const {
  Model
} = require('sequelize');
const { hasingPassword } = require('../helpers/helpers');
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
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        msg: "Email already exists"
      },
      validate: {
        isEmail: {
          msg: "Invalid email"
        },
        notNull: {
          msg: "Email is required"
        },
        notEmpty: {
          msg: "Email is required"
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Password is required"
        },
        notEmpty: {
          msg: "Password is required"
        }
      }
    },
    schoolId: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        msg: "School already exists"
      },
      validate: {
        notNull: {
          msg: "School is required"
        },
        notEmpty: {
          msg: "School is required"
        }
      }
    },
    role: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'User',
  });
  User.beforeCreate((ins, option) => {
    ins.password = hasingPassword(ins.password);
  })
  return User;
};