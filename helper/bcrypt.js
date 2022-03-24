const bcrypt = require('bcrypt')

const hashPassword = (password) =>{
    return bcrypt.hashSync(password,10)
}

const comparePassword = (password,has) =>{
    return bcrypt.compareSync(password,has)
}

module.exports = {
    hashPassword,
    comparePassword
}