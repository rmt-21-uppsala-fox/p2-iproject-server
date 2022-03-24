const { Game, User, Wishlist } = require(`../models`);
const axios = require(`axios`);
const MidtransKey = process.env.MidtransKey;
const keyOfRAWG = process.env.key;
const email = process.env.EMAIL;
const password = process.env.PASSWORD;
const nodemailer = require("nodemailer");

class Controller {
  static async getTransaction(req, res, next) {
    try {
      const characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

      function generateString(length) {
        let result = " ";
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
          result += characters.charAt(
            Math.floor(Math.random() * charactersLength)
          );
        }
        return result;
      }
      // const id = req.userAccess.id;
      // console.log(id);
      // const gameDetail = await Wishlist.findAll({
      //   UserId: id,
      //   include: [{ model: Game }, { model: User }],
      // });
      // console.log(gameDetail);

      const id = +req.params.gameId;
      const dataGame = await axios({
        method: `get`,
        url: `https://api.rawg.io/api/games/${id}`,
        params: {
          key: `${keyOfRAWG}`,
        },
      });
      const dataPrice = await axios({
        method: `get`,
        url: `https://www.cheapshark.com/api/1.0/games`,
        params: {
          title: `${dataGame.data.name}`,
        },
      });
      // console.log(price.data);
      const price = Number(dataPrice.data[0].cheapest);
      const total = price * 15000;

      // console.log(`${total}, ${req.userAccess.email}, ${dataGame.data.name}`);

      await axios({
        url: "https://app.sandbox.midtrans.com/snap/v1/transactions",
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization:
            "Basic " + Buffer.from(`${MidtransKey}`).toString("base64"),
        },
        data: {
          payment_type: "bank_transfer",
          bank_transfer: {
            bank: "permata",
          },
          transaction_details: {
            order_id: "purchase-game-" + generateString(8),
            gross_amount: `${total}`,
          },
          customer_details: {
            email: `${req.userAccess.email}`,
          },
          item_details: [
            {
              name: `${dataGame.data.name}`,
              quantity: 1,
              price: `${total}`,
            },
          ],
        },
      }).then(
        (snapResponse) => {
          let snapToken = snapResponse.data.token;
          // console.log("Retrieved snap token:", snapToken);
          // Pass the Snap Token to frontend, render the HTML page

          let transporter = nodemailer.createTransport({
            service: `gmail`,
            auth: {
              user: `${email}`, // generated ethereal user
              pass: `${password}`, // generated ethereal password
            },
          });

          // send mail with defined transport object
          let mailOptions = {
            from: `muhammadnhilmi@gmail.com`, // sender address
            to: "22416067@ppicurug.ac.id", // list of receivers
            subject: "Payment", // Subject line
            text: "Have u finish your payment?", // plain text body
          };

          transporter.sendMail(mailOptions, (err, options) => {
            if (err) {
              console.log(err);
            }
          });

          res.status(201).json(snapToken);
        },
        (error) => {
          res.send(`Fail to call API w/ error ${error}`);
          next(err);
        }
      );
      // console.log(data);
      // res.status(201).json(data.data);
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
}

module.exports = Controller;
