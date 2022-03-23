const { Order, Game } = require(`../models`);
const axios = require(`axios`);
const keyOfRAWG = process.env.key;

class Controller {
  static async getTransaction(req, res, next) {
    try {
      console.log(`.........`);
      // const id = +req.params.gameId;
      // const gameId = await axios({
      //   method: `get`,
      //   url: `https://api.rawg.io/api/games/${id}`,
      //   params: {
      //     key: `${keyOfRAWG}`,
      //   },
      // });
      // const data = await axios({
      //   url: "https://app.sandbox.midtrans.com/snap/v1/transactions",
      //   method: "post",
      //   headers: {
      //     "Content-Type": "application/json",
      //     Accept: "application/json",
      //     Authorization:
      //       "Basic " +
      //       Buffer.from("SB-Mid-server-6twKVV-HT_UTWgB5jIdDZbcg").toString(
      //         "base64"
      //       ),
      //   },
      //   data: {
      //     payment_type: "bank_transfer",
      //     bank_transfer: {
      //       bank: "permata",
      //     },
      //     transaction_details: {
      //       order_id: "C175101",
      //       gross_amount: 145000,
      //     },
      //     customer_details: {
      //       first_name: "Johny",
      //       last_name: "Kane",
      //       email: "testmidtrans@mailnesia.com",
      //       phone: "08111222333",
      //     },
      //   },
      // });
      // // console.log(data);
      // res.status(201).json(data.data);
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
}

module.exports = Controller;
