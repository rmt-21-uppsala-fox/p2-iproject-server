const{convertTokenToPayload} = require('../helpers/jwt')
const{User} = require('../models/index')

const authentication =async (req, res, next) => {//async karena akses database, menuggu sesaat
    //access form urlencoded => req.body
    //access token => req.headers
    try {
      const{access_token} = req.headers//taruh token pada headers, dengan value access_token 
      console.log("Ini token", access_token)
  
      const payload = convertTokenToPayload(access_token) 
      console.log(payload, " INI PAYLOAD")
      const user = await User.findByPk(payload.id)
        if(!user) {
            throw{
                name : "INVALID_USER"
            }
        }

        req.loginUser = {
            id: user.id,
            username: user.username,
            email: user.email
        }//data tambahan ttg user yg sedang login
        console.log(req.loginUser, " INI LOGIN USER dari authentication")


      next() //agar middleware bisa berlanjut
    } catch(err) {
      next(err)
      console.log(err)

      
    }
    
    

  }

module.exports = {authentication}
