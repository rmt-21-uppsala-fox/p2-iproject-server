const { Trip } = require("../models/index");
const axios = require("axios");

class ControllerTrip {
  static async home(req, res, next) {
    try {
      res.redirect("/trip");
    } catch (err) {
      next(err);
    }
  }
  static async homeCallback(req, res, next) {
    try {
      console.log(req.body);
      res.status(200).json({ message: "callback dari xendit masuk" });
      
    } catch (err) {
      next(err);
    }
  }

  static async getTrip(req, res, next) {
    try {
      const allTrip = await Trip.findAll();
      res.status(200).json(allTrip);
    } catch (err) {
      console.log(err);
      next(err);
    }
  }

  static async getTripId(req, res, next) {
    try {
      const id = +req.params.id;
      if (!id) throw { name: "NotFound" };
      const tripById = await Trip.findByPk(id);
      res.status(200).json(tripById);
    } catch (err) {
      next(err);
    }
  }

  static async xendintPayment(req, res, next) {
    try {
      // console.log(req.requestAccess,"ini reqbody");
      console.log(req.body.price,"ini reqbody");
      const timestamp = Date.now()
      const noInvoice = Math.floor(Math.random(999) * 999)
      const data = {
        external_id: `invoice-${timestamp}`,
        amount: req.body.price,
        payer_email: req.requestAccess.email,
        description: "Invoice #"+ noInvoice
      };
      let response = await axios.post("https://api.xendit.co/v2/invoices",data,{
        headers: {
            'Authorization': 'Basic eG5kX2RldmVsb3BtZW50X0VpSHBaVGFyUHFDQzVqTHVncGdWNDRZaEhLN3QzQVhTOTkwUDI1MEIxQklsR3E2UzQ1ZXRQb3ZBQ3l3OTd3Ojo=',
        }
    })
      console.log(response, "response masuk");
      let responseUrl = response.data.invoice_url;
      res.status(200).json(responseUrl);
    } catch (err) {
      // console.log(err, "logo");
      next(err);
    }
  }

  static async xendintCallback(req, res, next) {
    try {
      let response = await axios.post("https://api.xendit.co/v2/invoices",data,{
        headers: {
            'Authorization': 'Basic eG5kX2RldmVsb3BtZW50X0VpSHBaVGFyUHFDQzVqTHVncGdWNDRZaEhLN3QzQVhTOTkwUDI1MEIxQklsR3E2UzQ1ZXRQb3ZBQ3l3OTd3Ojo=',
        }
    })
      let responseUrl = response.data.invoice_url;
      res.status(200).json(responseUrl);
    } catch (err) {
      next(error);
    }
  }
}

module.exports = { ControllerTrip };
