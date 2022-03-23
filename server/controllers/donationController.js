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
      let { nominal } = req.body;
      let UserId = req.user.id;
      let data = await UserHistory.create({
        DonationId,
        UserId,
        nominal,
      });
      const invoice = await XenditInvoice.createInvoice(UserId, nominal);
      console.log(invoice);
      res.status(200).json(invoice);
      // res.status(201).json({
      //   id: data.id,
      //   DonationId: data.DonationId,
      //   UserId: data.UserId,
      //   nominal: data.nominal,
      //   status: data.status,
      // });
    } catch (error) {
      console.log(error?.message || error);
      next(error);
    }
  }

  static async xenditpayment(req, res, next) {
    try {
      const { UserId } = req.user.id;
      const invoice = await XenditInvoice.createInvoice(UserId, 10000);
      res.status(200).json(invoice);
    } catch (err) {
      console.log(err?.message || err);
      res.status(500).json(err?.message || err);
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
          user: "kitabantuuu@gmail.com",
          pass: process.env.passwordEmail,
        },
      });

      let mailOptions = {
        from: "platform.kitabantu@gmail.com",
        to: `${findemailUser.email}`,
        subject: "Donation Success",
        text: `Terima kasih atas donasi anda, semoga anda diberikan rezeki yang berlimpah!, ${findemailUser.email}.`,
        // text: `<p style="text-color:blue;"> Terima kasih atas donasi anda, semoga anda diberikan rezeki yang berlimpah! </p>`,
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
