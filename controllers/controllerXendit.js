const { createInvoice, expireInvoice, getInvoice } = require("../API/xendit");

class Controller {
  static async xenditCreate(req, res, next) {
    console.log("masuk");
    const { name, id, price, email } = req.body;
    const payment = await createInvoice("1", 25000, { email: "ican@gmail.com" });
    console.log(payment);
    res.status(200).json({ payment });
  }
}

module.exports = Controller;
