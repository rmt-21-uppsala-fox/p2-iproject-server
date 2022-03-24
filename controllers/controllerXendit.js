const { createInvoice, expireInvoice, getInvoice } = require("../API/xendit");

class Controller {
  static async createPayment(req, res, next) {
    const { amount, RestaurantId } = req.body;
    const email = req.identify.emailCust;
    const custId = req.identify.custId;
    const payment = await createInvoice(`${custId}`, +amount, RestaurantId, email);
    res.status(200).json(payment);
  }
}

module.exports = Controller;
