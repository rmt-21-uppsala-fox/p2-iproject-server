const jwt = require("jsonwebtoken")
const kataKunci = "Key"

const payloadToken = (payload) => {
   return jwt.sign(payload, kataKunci);
}

const readPayloadToken = (token) => {
   return jwt.verify(token, kataKunci);
}

module.exports = {
    payloadToken,
    readPayloadToken,
};
