const bcrypt = require("bcrypt")

function hashPw (password){
    return bcrypt.hashSync(password,10)
}

function comparePw(password,hashedPw){
    return bcrypt.compareSync(password, hashedPw)
}

module.exports = {hashPw, comparePw}