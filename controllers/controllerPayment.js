const { Order, Wishlist } = require(`../models`);
const axios = require(`axios`);

class Controller {
  static async getTransaction(req, res, next) {
    try {
      const id = req.userAccess.id;
      // console.log(id);
      const gameDetail = await Wishlist.findAll({ UserId: id });
      // console.log(gameDetail);
      const data = await axios({
        url: "https://app.sandbox.midtrans.com/snap/v1/transactions",
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization:
            "Basic " +
            Buffer.from("SB-Mid-server-6twKVV-HT_UTWgB5jIdDZbcg").toString(
              "base64"
            ),
        },
        data: {
          payment_type: "bank_transfer",
          bank_transfer: {
            bank: "permata",
          },
          transaction_details: {
            order_id: "C175101",
            gross_amount: 145000,
          },
          customer_details: {
            first_name: "Johny",
            last_name: "Kane",
            email: "testmidtrans@mailnesia.com",
            phone: "08111222333",
          },
        },
      });
      // console.log(data.data);
      res.status(201).json(data.data);
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
}

module.exports = Controller;
