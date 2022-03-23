const XenditInvoice = require("../API/xendit");

class WalletCardController {
  static async checkoutCart(req, res, next) {
    try {
      const { uid } = req.user;
      const invoice = await XenditInvoice.createInvoice(uid, 130000);
      res.status(200).json(invoice);
    } catch (err) {
      console.log(err?.message || err);
      res.status(500).json(err?.message || err);
    }
  }
}

module.exports = WalletCardController;
