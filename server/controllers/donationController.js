const { UserHistory, Donation } = require("../models/index");

class DonationController {
  static async donation(req, res, next) {
    try {
      let { DonationId } = req.params;
      let { nominal } = req.body;
      let UserId = req.user.id;
      let data = await UserHistory.create({
        DonationId,
        UserId,
        nominal,
      });
      res.status(201).json({
        id: data.id,
        DonationId: data.DonationId,
        UserId: data.UserId,
        nominal: data.nominal,
        status: data.status,
      });
    } catch (error) {
      next(error);
    }
  }

  static async updateStatus(req, res, next) {
    try {
      let UserHistoryId = req.params.UserHistoryId;
      let data = await UserHistory.update(
        { status: "success" },
        { where: { id: UserHistoryId } }
      );
      res.status(200).json({ message: "success payment" });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = DonationController;
