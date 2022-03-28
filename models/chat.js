'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Chat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Chat.belongsTo(models.User, { foreignKey: "UserId" })
    }
  }
  Chat.init({
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: { msg: "UserId is required" },
        notNull: { msg: "UserId is required" },
      }
    },
    message: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: "Message is required" },
        notNull: { msg: "Message is required" },
      }
    },
  }, {
    sequelize,
    modelName: 'Chat',
  });
  return Chat;
};