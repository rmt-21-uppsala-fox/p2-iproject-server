const express = require('express')
const app = express()
const port = 3000
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {User} = require('./models');
const path = require('path');
const secretKey = 'ThisIsASecretKey'

const publicPath = path.join(__dirname, '../p2-iproject-server/face-recognition/public')

app.use(cors())
app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())


app.post('/register', async (req, res, next) => {
    try {
        let {
            name,
            phoneNumber,
            email,
            password
        } = req.body
        
        let newUser = await User.create({
            name,
            phoneNumber,
            email,
            password
        }, {
            returning: true
        })
        
        res.status(201).json({
            id: newUser.id,
            name: newUser.name,
            phoneNumber: newUser.phoneNumber,
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

        if (!email || !password) {
            throw new Error('Please check your input')
        }

        let foundUser = await User.findOne({
            where: {
                email
            }
        })

        if (foundUser) {
            if (bcrypt.compareSync(password, foundUser.password)) {
                let access_token = jwt.sign({
                    id: foundUser.id,
                    email: foundUser.email
                }, secretKey)

                req.headers.access_token = access_token
                res.status(200).json({
                    'access_token': access_token
                })
            } else {
                throw new Error('Invalid email/password')
            }
        } else {
            throw new Error('User not found')
        }
    } catch (error) {
        next(error)
    }
})


app.get('/facePay', async (req, res, next) => {
    try {
        let {
            access_token
        } = req.headers
        let payload = jwt.verify(access_token, secretKey)

        let foundUser = await User.findByPk(payload.id)

        if (foundUser) {
            req.currentUserId = foundUser.id
            req.currentUserEmail = foundUser.email
            //TODO:
            //popup Modal here
            //while unknown looping terus sampai 5 detik then show error message
            //if benar lanjut ke payment pilihan
            //kalau pakai payment xendit lsg harus masukin password atau pin nya lagi
        } else {
            throw new Error('User not found')
        }
    } catch (error) {
        next(error)
    }
})

app.use(express.static(publicPath))

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
  })