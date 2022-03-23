const { UserHistory, Donation } = require("../models/index");

class DonationController {
  static async getAllDonation(req, res, next) {
    try {
      let data = await Donation.findAll();
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }

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

  static async detailDonation(req, res, next) {
    try {
      let { id } = req.params;
      let data = await Donation.findByPk(id);
      if (!data) throw { name: "donation not found" };
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }

  static async updateStatus(req, res, next) {
    try {
      let UserHistoryId = req.params.UserHistoryId;
      let findData = await UserHistory.findByPk(UserHistoryId);
      let data = await UserHistory.update(
        { status: "success" },
        { where: { id: UserHistoryId }, returning: true }
      );
      let findDonation = await Donation.findByPk(findData.DonationId);
      await Donation.update(
        {
          collectedFunds: findDonation.collectedFunds + findData.nominal,
        },
        { where: { id: findData.DonationId } }
      );
      res.status(200).json({ message: "success payment" });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = DonationController;
