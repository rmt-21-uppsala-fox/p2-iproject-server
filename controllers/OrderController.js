const { Order } = require("../models/index");

class OrderController {
  static async getAllOrder(req, res, next) {
    try {
      const data = await Order.findAll();
      res.status(200).json(data);
    } catch (error) {
      console.log(error);
    }
  }

  static async createNewOrder(req, res, next) {
    try {
      const Xendit = require("xendit-node");
      const x = new Xendit({
        secretKey:
          "xnd_development_bdEiRy0heWoCl500ulpeW4J7KYfNqkZwWPwAaPgtVwNIYASIPLABGDXGIc6NnCs",
      });

      const { EWallet } = x;
      const ewalletSpecificOptions = {};
      const ew = new EWallet(ewalletSpecificOptions);

      const resp = await ew.createEWalletCharge({
        referenceID: req.body.ref_id,
        currency: "IDR",
        amount: 1000,
        checkoutMethod: "ONE_TIME_PAYMENT",
        channelCode: "ID_SHOPEEPAY",
        channelProperties: {
          successRedirectURL: "https://dashboard.xendit.co/register/1",
        },
        metadata: {
          branch_code: "tree_branch",
        },
        
      });
        console.log(resp);
      res.status(200).json(resp);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = OrderController;
