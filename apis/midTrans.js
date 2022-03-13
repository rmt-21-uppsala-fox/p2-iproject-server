
const axios = require ('axios')
const API_KEY = process.env.MIDTRANS_API
const instance = axios.create({
    baseURL: `https://app.sandbox.midtrans.com/snap`,
    headers: {
        'Authorization': API_KEY
    }
})

 async function initiateTransaction(req, res, next) {
    try {
      const {ProductId} = req.params
      
      
      const {data} = await instance.get(`/v1/transactions`)
      console.log(data, "INI MIDTRANS")
      res.status(200).json(data)
    } catch (err) {
      next(err)
    }
  }

  initiateTransaction()
module.exports = instance