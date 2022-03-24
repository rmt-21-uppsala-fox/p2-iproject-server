if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {
    User,
    Package,
    Image,
    Transaction
} = require('./models');
const {
    default: axios
} = require('axios');
const imgbbUploader = require("imgbb-uploader");

app.use(cors())
app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())

const authentication = async (req, res, next) => {
    try {
        const {
            access_token
        } = req.headers

        const payload = jwt.verify(access_token, process.env.SECRET_KEY)
        const foundUser = await User.findOne({
            where: {
                email: payload.email
            }
        })

        if (!foundUser) throw new Error('JsonWebTokenError')

        req.currentUser = {
            id: foundUser.id,
            email: foundUser.email
        }
        next()
    } catch (error) {
        next(error)
    }
}

app.post('/register', async (req, res, next) => {
    try {
        let {
            name,
            email,
            password
        } = req.body

        if (!email || !password) throw new Error('Please check your input')

        const userExist = await User.findOne({
            where: {
                email
            }
        })

        if (userExist) throw new Error('Email must be unique')

        let newUser = await User.create({
            name,
            email,
            password
        })

        res.status(201).json({
            id: newUser.id,
            name: newUser.name,
            email: newUser.email
        })
    } catch (error) {
        next(error)
    }
})

app.post('/login', async (req, res, next) => {
    try {
        let {
            email,
            password
        } = req.body

        if (!email || !password) throw new Error('Please check your input')

        let foundUser = await User.findOne({
            where: {
                email
            }
        })

        if (!foundUser) throw new Error('User not found')

        const correctPassword = bcrypt.compareSync(password, foundUser.password)

        if (!correctPassword) throw new Error('Invalid email/password')

        const access_token = jwt.sign({
            id: foundUser.id,
            email: foundUser.email,
            name: foundUser.name
        }, process.env.SECRET_KEY)

        req.headers.access_token = access_token

        res.status(200).json({
            'access_token': access_token,
            'name': foundUser.name,
            'id': foundUser.id,
            'email': foundUser.email
        })
    } catch (error) {
        next(error)
    }
})

app.post('/xenditCallback', async (req, res) => {
    await Transaction.update({
        status: req.body.status
    }, {
        where: {
            xenditInvoiceId: req.body.id
        }
    })

    res.status(200).json({
        message: 'Successfully accepted the callback'
    })
})

app.use(authentication)

app.get('/imagesUrl', async (req, res, next) => {
    try {
        const imagesUrl = await Image.findAll({
            include: User,
            attributes: {
                exclude: ['createdAt', 'updatedAt']
            }
        })


        const responseMap = {};
        for (let i = 0; i < imagesUrl.length; i++) {
            const name = imagesUrl[i].User.name;
            if (responseMap[name]) {
                responseMap[name].push(imagesUrl[i].imageUrl);
            } else {
                responseMap[name] = [imagesUrl[i].imageUrl];
            }
        }

        res.status(200).json(responseMap)
    } catch (error) {
        next(error)
    }
})

app.get('/packages', async (req, res, next) => {
    try {
        const packages = await Package.findAll({
            attributes: {
                exclude: ['createdAt', 'updatedAt']
            }
        })

        res.status(200).json(packages)
    } catch (error) {
        next(error)
    }
})

app.post('/xenditPay', async (req, res, next) => {
    try {
        let response = await axios.post('https://api.xendit.co/v2/invoices', req.body, {
            headers: {
                'Authorization': process.env.XENDIT_API_KEY
            }
        })
        let responseUrl = response.data.invoice_url

        await Transaction.create({
            xenditInvoiceId: response.data.id,
            amount: req.body.amount,
            customerName: req.body.customer.given_names,
            customerEmail: req.body.customer.email,
            status: response.data.status
        })

        res.status(200).json(responseUrl)
    } catch (error) {
        next(error)
    }
})

app.post('/uploadToImgBB', async (req, res, next) => {
    try {
        let base64String = req.body.img

        let image = base64String.split(',')[1]
        const options = {
            apiKey: process.env.IMGBB_API_KEY,
            base64string: image
        };

        let response = await imgbbUploader(options)
        let responseUrl = response.display_url

        await Image.create({
            imageUrl: responseUrl,
            UserId: req.currentUser.id
        })

        res.status(200).json({
            'Message': 'Success upload image'
        })
    } catch (error) {
        next(error)
    }
})

app.use((err, req, res, next) => {
    let code = 500
    let msg = 'Internal server error'

    if (err.message === 'Email is required') {
        code = 400
        msg = 'Email is required'
    }

    if (err.message === 'Password is required') {
        code = 400
        msg = 'Password is required'
    }

    if (err.message === 'Email must be unique') {
        code = 400
        msg = 'Email must be unique'
    }

    if (err.name === 'SequelizeUniqueConstraintError') {
        code = 400
        msg = 'Email must be unique'
    }

    if (err.name === 'SequelizeValidationError') {
        code = 400
        msg = err.errors[0].message
    }

    if (err.name === 'JsonWebTokenError' || err.message === 'JsonWebTokenError') {
        code = 401
        msg = 'Invalid token'
    }

    if (err.name === 'SyntaxError') {
        code = 401
        msg = 'Invalid token'
    }

    if (err.name === 'Invalid email/password' || err.message === 'Invalid email/password') {
        code = 401
        msg = 'Invalid email/password'
    }

    if (err.message === 'User not found') {
        code = 401
        msg = 'User not found'
    }

    if (err.message === 'You are not authorized') {
        code = 403
        msg = 'You are not authorized'
    }

    res.status(code).json({
        'message': msg
    })
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})