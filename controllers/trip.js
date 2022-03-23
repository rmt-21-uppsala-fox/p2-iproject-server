const { Trip } = require("../models/index");
const axios = require("axios")

class ControllerTrip {
  static async home(req,res,next){
    try {
      res.redirect('/trip')
    } catch (err) {
      next(err);
    }
  }
  static async homeCallback(req,res,next){
    try {
      console.log(req.body);
      res.status(200).json({message: 'callback dari xendit masuk'})
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
      const id = req.params.id;
      if(!id) throw { name: "NotFound" }
      const Trip = await Trip.finByPk(id);
      res.status(200).json(Trip);
    } catch (err) {
      next(err);
    }
  }


  static async xendintPayment(req, res, next){
    try {
      let response = await axios.post('https://api.xendit.co/v2/invoices', req.body, {
        headers: {
            'Authorization': 'Basic eG5kX2RldmVsb3BtZW50XzZnMHloWmFXU2R6YmdyamU3c2hFSng1UXJPWmVQMm9FUmd3Nk5RWGxQa21Ga0RGTnl0QnN2NElkMmxTMlJW',
        }
    })
    let responseUrl = response.data.invoice_url
    res.status(200).json(responseUrl)
    } catch (err) {
      next(error)
    }
  }

  static async xendintCallback(req, res, next){
    try {
      let response = await axios.post('https://api.xendit.co/v2/invoices', req.body, {
        headers: {
            'Authorization': 'Basic eG5kX2RldmVsb3BtZW50XzZnMHloWmFXU2R6YmdyamU3c2hFSng1UXJPWmVQMm9FUmd3Nk5RWGxQa21Ga0RGTnl0QnN2NElkMmxTMlJW',
        }
    })
    let responseUrl = response.data.invoice_url
    res.status(200).json(responseUrl)
    } catch (err) {
      next(error)
    }
  }


  
  
}

module.exports = { ControllerTrip };
