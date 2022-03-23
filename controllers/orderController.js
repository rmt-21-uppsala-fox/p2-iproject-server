const { Order } = require("../models");

class Controller {
  static addOrder(req, res, next) {
    try {
      const order = Order.create({
        CustomerId: req.identify.custId,
        MenuId: req.params.menuId,
      });
      res.status(201).json({
        order,
        message: `Successfully added order with id ${req.params.menuId}`,
      });
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
  static getAllOrderByCust(req, res, next) {
    try {
      const orders = Order.findAll({
        where: {
          CustomerId: req.identify.custId,
        },
      });
      res.status(200).json(orders);
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
}
