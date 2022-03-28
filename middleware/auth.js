// const { readPayload } = require('../helper/jwt')
const jwt = require("jsonwebtoken")
const { User } = require('../models')
const secret = process.env.secret || "rahasia"

const authn = async (req, res, next) => {

  try {
    const accessToken = req.headers.access_token
    // const payload = readPayload(accessToken)
    const payload = jwt.verify(accessToken, secret)
    // console.log(payload, "<<<<<pppp")
    let user = await User.findByPk(payload.id)
    if (!user || !payload) {
      throw {
        code: 401,
        name: 'Not Found',
        msgError: 'Authentication Error'
      }
    }
    console.log(user)
    req.userCredentials = {
      id: user.id,
      name: user.name,
      email: user.email,
    }
    next()
  }
  catch (err) {
    console.log(err)
    next(err)
  }
}

// const authz = async (req, res, next) => {

//   try {
//     const { foodId } = req.params
//     // console.log(req.params)
//     const userId = req.userCredentials.id
//     // console.log(req.userCredentials)
//     let food = await Food.findByPk(foodId)
//     let user = await User.findByPk(userId)
//     if (!food) {
//       throw {
//         code: 401,
//         name: 'Not Found',
//         msgError: 'Food not found'
//       }
//     }
//     if (!user) {
//       throw {
//         code: 401,
//         name: 'Not Found',
//         msgError: 'User not found'
//       }
//     }
//     if (user.role !== 'admin') {
//       if (userId !== food.authorId) {
//         throw {
//           code: 403,
//           name: 'Unauthorized',
//           msgError: 'Unauthorized access'
//         }
//       } else {
//         next()
//       }
//     } else {
//       next()
//     }

//   } catch (err) {
//     console.log(err)
//     next(err)
//   }
// }


module.exports = { authn }