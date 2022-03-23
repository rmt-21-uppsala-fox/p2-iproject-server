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
      Order.hasMany(models.Menu)
    }
  }
  Order.init({
    customerName: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    totalPerson: DataTypes.INTEGER,
    orderName: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    totalPrice: DataTypes.INTEGER,
    paymentStatus: DataTypes.STRING,
    MenuId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};