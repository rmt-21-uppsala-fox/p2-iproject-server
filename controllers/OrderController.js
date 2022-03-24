const { Order, Menu } = require("../models/index");
const dayjs = require("dayjs");
const { sequelize } = require("../models/index");

class OrderController {
  static async getAllOrder(req, res, next) {
    try {
      const data = await Order.findAll();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({message: 'Internal server error'})
      console.log(error);
    }
  }

  static async newOrder(req, res, next) {
    const transaction = await sequelize.transaction();
    try {
      let now = dayjs();
      let cust = req.body.customerName;

      let orderName = `${cust.toUpperCase()}${now.get("hour")}${now.get("minute")}${now.get("date")}${
        now.get("month") + 1
      }${now.get("year")}`;
      let obj = {
        customerName: req.body.customerName,
        phoneNumber: req.body.phoneNumber,
        totalPerson: req.body.totalPerson,
        orderName: orderName,
        paymentStatus: "Unpaid",
      };

      const orders = req.body.orders;

      for (const order of orders) {
        obj.MenuId = order.MenuId;
        obj.quantity = order.quantity;
        obj.totalPrice = order.totalPrice;

        await Order.create(obj, {
          transaction,
        });
      }

      await transaction.commit()
      res.status(201).json({orderName});
    } catch (error) {
      await transaction.rollback()
      res.status(500).json({message: 'Internal server error'})
      console.log(error);
    }
  }

  static async orderPayment(req, res, next) {
    try {
      const orderName = req.body.orderName
      const amount = req.body.amount
      let transaction = await sequelize.query(`SELECT "customerName", "orderName", "phoneNumber", SUM("totalPrice") AS "totalPrice" FROM "Orders" WHERE "orderName" = '${orderName}' GROUP BY "orderName", "customerName", "phoneNumber"`, { type: sequelize.QueryTypes.SELECT })
      // console.log(transaction)
      const Xendit = require("xendit-node");
      const x = new Xendit({
        secretKey: "xnd_development_3JYiz5D2aOC9UvaDRYIg4z6Q5hV8hlyaQ7co6fY8wbCjQMG4bCyKAkQZeP2KC",
      });

      const { EWallet } = x;
      const ewalletSpecificOptions = {};
      const ew = new EWallet(ewalletSpecificOptions);
      // callback yang di dashboard xendit isi endpoint patch BE
      const resp = await ew.createEWalletCharge({
        referenceID: orderName,
        currency: "IDR",
        amount: +amount,
        checkoutMethod: "ONE_TIME_PAYMENT",
        channelCode: "ID_SHOPEEPAY",
        channelProperties: {
          // redirect ke halaman link FE
          successRedirectURL: "https://natura-iproject.web.app/summary",
        },
        metadata: {
          branch_code: "tree_branch",
        },
      });
      res.status(200).json(resp);
    } catch (error) {
      res.status(500).json({message: 'Internal server error'})
      console.log(error);
    }
  }

  static async receipt(req, res, next) {
    try {
      const orderName = req.body.reference_id
      await Order.update({
        paymentStatus: 'Paid'
      },
      {
        where: {
          orderName,
        }
      })

      let transaction = await sequelize.query(`SELECT "customerName", "orderName", "phoneNumber", "paymentStatus", SUM("totalPrice") AS "totalPrice" FROM "Orders" WHERE "orderName" = '${orderName}' GROUP BY "orderName", "customerName", "phoneNumber", "paymentStatus"`, { type: sequelize.QueryTypes.SELECT })

      res.status(200).json({transaction, message: 'Receipt sent! Show it to our crew to receive your order, Thanks!'})
    } catch (error) {
      console.log(error)
      res.status(500).json(error)
    }
  }
}

module.exports = OrderController;
