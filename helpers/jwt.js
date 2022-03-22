const jwt = require('jsonwebtoken')

function generateToken(payload) {
    return jwt.sign(payload, process.env.SECRET_KEY)
}

function verifyToken(access_token) {
    return jwt.verify(access_token, process.env.SECRET_KEY)
}

module.exports = {
    generateToken,
    verifyToken
}