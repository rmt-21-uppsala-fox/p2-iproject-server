
const {Product} = require('../models/index.js')
const authorization = async (req, res, next) => {//authorization
    //bila author berbeda dengan login dan author bukan admin, tolak access 
    try {
       
        let idProduct = req.params.ProductId
        //ambil data dari authentication
        let userLoginId = req.loginUser.id
        let userRole = req.loginUser.role
        console.log(idProduct, " INI  PRODUCT ID")
        console.log(userLoginId, " INI  USER ID")
        console.log(userRole, " INI  ROLE")
        const product = await Product.findOne({
            where : {
                id : idProduct,
                authorId: userLoginId
            }
        })
        console.log(product, " INI  PRODUCT")
        if (!product && userRole !== 'admin') {
            throw({
                code: 403,
                name: "NOT_ENOUGH_PERMISSION",
                message: "Forbidden access to resource"
            })
        }
        next()
    } catch (err) {
        next(err)
    }
}

module.exports = authorization