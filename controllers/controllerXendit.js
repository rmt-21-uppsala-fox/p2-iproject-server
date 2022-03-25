const { createInvoice, expireInvoice, getInvoice } = require("../API/xendit");
const { Order } = require("../models");

class Controller {
  static async createPayment(req, res, next) {
    const { amount, RestaurantId } = req.body;
    const email = req.identify.emailCust;
    const custId = req.identify.custId;
    const payment = await createInvoice(`${custId}`, +amount, RestaurantId, email);
    console.log(payment);
    res.status(200).json(payment);
  }
  static async getCallbackXendit(req, res, next) {
    try {
      console.log(req.body);
      const status = req.body.status;
      if (status === "PAID") {
        const changeStatus = await Order.update(
          {
            status: "paid",
          },
          {
            where: {
              CustomerId: req.body.external_id,
            },
          }
        );
        res.status(200).json({ message: "success" });
      } else {
        throw {
          code: 402,
          name: "Payment Failed",
          message: "Payment Failed",
        };
      }
    } catch (err) {
      next(err);
    }
  }
}

module.exports = Controller;
