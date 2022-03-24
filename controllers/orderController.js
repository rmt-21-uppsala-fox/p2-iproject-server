const { Order, Menu } = require("../models");

class Controller {
  static async addOrder(req, res, next) {
    try {
      const newOrder = await Order.create({
        CustomerId: +req.identify.custId,
        MenuId: +req.params.menuId,
      });
      res.status(201).json({
        newOrder,
        message: `Successfully added order with id ${req.params.menuId}`,
      });
    } catch (err) {
      next(err);
    }
  }
  static async getAllOrderByCust(req, res, next) {
    try {
      const orders = await Order.findAll({
        include: {
          model: Menu,
        },
        where: {
          CustomerId: req.identify.custId,
        },
      });
      res.status(200).json(orders);
    } catch (err) {
      next(err);
    }
  }
  static async deleteOrder(req, res, next) {
    try {
      const order = await Order.findByPk(req.params.orderId);
      if (!order) {
        throw {
          code: 404,
          name: "Not Found",
          message: "Order not found",
        };
      }
      await order.destroy();
      res.status(200).json({
        message: `Order with id ${req.params.orderId} deleted`,
      });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = Controller;
