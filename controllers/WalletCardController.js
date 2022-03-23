const { WalletCard } = require("../models");

class WalletCardController {
  static async getWalletCards(req, res, next) {
    try {
      const wallets = await WalletCard.findAll();
      res.status(200).json(wallets);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = WalletCardController;
