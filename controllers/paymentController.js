const midTrans = require('../apis/midTrans')

async function mtGenerateTransactionToken(req, res, next) {
    try {
        const {email, username} = req.loginUser
        const {imdbId} = req.params
        const {title, type, price} = req.body
        const body = {
            "transaction_details": {
              "order_id": `ORDER-102-${new Date().toISOString()}`,
              "gross_amount": price
            },
            "credit_card": {
              "secure": true
            },
            "item_details": [{
              "id": `${imdbId}`,
              "price": price,
              "quantity": 1,
              "name": `${title}- ${type}`
            }],
            "customer_details": {
              "first_name": `${username}`,
              "last_name": `${username}`,
              "email": `${email}`,
              "phone": "",
              "billing_address": {
                "first_name":`${username}`,
                "last_name": `${username}`,
                "email": `${email}`,
                "phone": "",
              "address": "",
              "city": "",
              "postal_code": "",
              "country_code": ""
              },
              "shipping_address": {
                "first_name":`${username}`,
                "last_name": `${username}`,
                "email": `${email}`,
                "phone": "",
              "address": "",
              "city": "",
              "postal_code": "",
              "country_code": ""
              }
            }
          }
      
      
      const {data} = await midTrans.post(`/v1/transactions`, body)
      console.log(data, "INI MIDTRANS TRANSACTION TOKEN")
      res.status(200).json(data)
    } catch (err) {
      console.log(err.response.data)
      next(err)
    }
  }

  module.exports ={ 
      mtGenerateTransactionToken
  }