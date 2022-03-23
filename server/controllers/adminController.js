const { Admin, Donation } = require("../models/index");
const { comparePassword, generateToken } = require("../helpers/helper");

class AdminController {
  static async register(req, res, next) {
    try {
      const { email, password, imageUrl } = req.body;
      const result = await Admin.create({ email, password, imageUrl });
      res.status(201).json({
        id: result.id,
        email: result.email,
      });
    } catch (error) {
      next(error);
    }
  }

  static async login(req, res, next) {
    try {
      const { email, password } = req.body;

      const result = await Admin.findOne({
        where: { email },
      });

      if (!result) throw { name: "Email and Password Invalid" };
      const compare = comparePassword(password, result.password);
      if (!compare) throw { name: "Email and Password Invalid" };

      const payload = {
        id: result.id,
      };
      const token = generateToken(payload);
      res.status(200).json({
        access_token: token,
        email: result.email,
      });
    } catch (error) {
      next(error);
    }
  }

  static async createDonation(req, res, next) {
    try {
      let AdminId = req.admin.id;
      let {
        title,
        imageUrl,
        target,
        collectedFunds,
        bankAccount,
        story,
        region,
      } = req.body;
      let data = await Donation.create({
        title,
        imageUrl,
        target,
        collectedFunds,
        bankAccount,
        story,
        region,
        AdminId,
      });
      res.status(201).json(data);
    } catch (error) {
      next(error);
    }
  }
}
module.exports = AdminController;
