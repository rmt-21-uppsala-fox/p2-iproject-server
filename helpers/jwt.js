const jwt = require('jsonwebtoken')

const SECRET_KEY = process.env.MY_KEY//ambil secret key dari .env. Jangan lupa masukkan .env pada .gitignore

function generateToken (payload) {
 return    jwt.sign(payload, SECRET_KEY)
}

function convertTokenToPayload(token) {
    return jwt.verify(token, SECRET_KEY)
}
module.exports = {generateToken, convertTokenToPayload}
