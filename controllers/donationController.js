if (process.env.NODE_ENV !== "production") require("dotenv").config();
const { User, UserHistory, Donation } = require("../models/index");
const nodemailer = require("nodemailer");
const XenditInvoice = require("../API/xendit");

class DonationController {
  static async getAllDonation(req, res, next) {
    try {
      let data = await Donation.findAll();
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }

  static async getMyDonation(req, res, next) {
    try {
      let UserId = req.user.id;
      let data = await UserHistory.findAll({
        include: { model: Donation },
        where: { UserId },
      });
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }

  static async donation(req, res, next) {
    try {
      let { DonationId } = req.params;
      // let { nominal } = req.body;
      let nominal = 20000;
      let UserId = req.user.id;
      let email = req.user.email;
      let data = await UserHistory.create({
        DonationId,
        UserId,
        nominal,
      });
      let text = UserId.toString() + "-" + data.id.toString();
      const invoice = await XenditInvoice.createInvoice(
        text,
        nominal,
        email,
        `Pembayaran donation dengan id donation ${DonationId}`
      );
      res.status(200).json({
        external_id: invoice.external_id,
        nominal: nominal,
        invoice: invoice.invoice_url,
      });
    } catch (error) {
      console.log(error?.message || error);
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
      let UserHistoryId = req.body.external_id.split("-")[1];
      UserHistoryId = Number(UserHistoryId);
      let findData = await UserHistory.findByPk(UserHistoryId);
      let data = await UserHistory.update(
        { status: "success" },
        { where: { id: UserHistoryId }, returning: true }
      );
      let findemailUser = await User.findByPk(findData.UserId);
      let findDonation = await Donation.findByPk(findData.DonationId);
      await Donation.update(
        {
          collectedFunds: findDonation.collectedFunds + findData.nominal,
        },
        { where: { id: findData.DonationId } }
      );
      let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.email,
          pass: process.env.passwordEmail,
        },
      });

      let mailOptions = {
        from: "platform.kitabantu@gmail.com",
        to: `${findemailUser.email}`,
        subject: "Donation Success",
        text: `Terima kasih atas donasi anda, semoga anda diberikan rezeki yang berlimpah!, ${findemailUser.email}.`,
      };

      transporter.sendMail(mailOptions, function (err, succes) {
        if (err) {
          console.log(err);
        } else {
          console.log("Email is sent");
        }
      });

      res.status(200).json({ message: "success payment" });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = DonationController;
