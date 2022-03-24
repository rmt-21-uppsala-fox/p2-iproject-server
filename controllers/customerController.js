const { Customer } = require("../models");

class Controller {
  static async getAllRestaurantCustomer(req, res, next) {
    try {
      const customers = await Customer.findAll({
        where: {
          RestaurantId: req.params.restaurantId,
        },
      });
      res.status(200).json(customers);
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
  static async getCustomer(req, res, next) {
    try {
      const customer = await Customer.findByPk(req.params.customerId);
      if (!customer) {
        throw {
          code: 404,
          name: "Not Found",
          message: "Customer not found",
        };
      }
      res.status(200).json(customer);
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
  static async deleteCustomer(req, res, next) {
    try {
      const customer = await Customer.findByPk(req.params.customerId);
      if (!customer) {
        throw {
          code: 404,
          name: "Not Found",
          message: "Customer not found",
        };
      }
      await customer.destroy();
      res.status(200).json({
        message: `Customer with id ${req.params.customerId} deleted`,
      });
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
}

module.exports = Controller;
