const { Ballroom } = require("../models/");

class XenditController {
  static async payment(req, res, next) {
    try {
      const { status, external_id } = req.body;
      console.log(req.body);
      const id = external_id.split("-")[0];
      await Ballroom.update({ status }, { where: { id } });
      res.status(200).json({
        message: `${id} - Status change to PAID`,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal server error" });
    }
  }
}

module.exports = XenditController;
