'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Order.belongsTo(models.Menu)
    }
  }
  Order.init({
    orderName: DataTypes.STRING,
    orderStatus: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    totalPrice: DataTypes.INTEGER,
    totalPerson: DataTypes.INTEGER,
    paymentStatus: DataTypes.STRING,
    paymentId: DataTypes.INTEGER,
    paymentMethod: DataTypes.STRING,
    MenuId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};