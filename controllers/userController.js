const SpotifyWebApi = require("spotify-web-api-node")
const { transporter } = require('../helper/nodemailer')
const { compare } = require('../helper/bcrypt')
const { signJWT } = require('../helper/jwt')
const { User } = require('../models')
const axios = require('axios')

class userController {
    static refresh(req, res) {
        const refreshToken = req.body.refreshToken
        const spotifyApi = new SpotifyWebApi({
            redirectUri: process.env.REDIRECT_URI,
            clientId: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
            refreshToken,
        })

        spotifyApi
            .refreshAccessToken()
            .then(data => {
                res.status(200).json({
                    accessToken: data.body.accessToken,
                    expiresIn: data.body.expiresIn,
                })
            })
            .catch(err => {
                next(err)
            })
    }
    static async register(req, res, next) {
        try {
            const { email, password } = req.body
            const result = await User.create({ email, password })
            res.status(201).json({ id: result.id, email: result.email })

        } catch (error) {
            next(error)
        }
    }
    static async preLogin(req, res, next) {
        try {
            const {email, password} = req.body
            if (!email || !password) {
                throw ({ name: 'wrong email/password' })
            }
            let emailSearch = await User.findOne({ where: { email } })
            if (!emailSearch) {
                throw ({ name: 'email/password not valid' })
            }
            let comaparePass = compare(password, emailSearch.password)
            if (!comaparePass) {
                throw ({ name: 'wrong email/password' })
            }
            let access_tokenCustom = signJWT({
                id: emailSearch.id,
                role: emailSearch.role
            })
            let mailOptions = {
                from: "testinghaloprof@gmail.com",
                to: `${email}`,
                subject: "Hacktiv Music Login",
                text: `Telah Login di Hacktiv Music Login, Terima kasih telah menggunakan layanan kami, Silahkan masukkan akun spotify anda untuk melanjutkan.`,
            };

            transporter.sendMail(mailOptions, (err, info) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log("Email Sent:" + info.response);
                }
            });
            res.status(200).json({ access_tokenCustom })
        } catch (error) {
            console.log(error)
            next(error)
        }
    }
    static login(req, res, next) {
        const { code } = req.body
        if(!code){
            throw({name:"Invalid email/password"})
        }
        const spotifyApi = new SpotifyWebApi({
            redirectUri: process.env.REDIRECT_URI,
            clientId: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
        })

        spotifyApi
            .authorizationCodeGrant(code)
            .then(data => {
                res.status(200).json({
                    access_token: data.body.access_token,
                    expiresIn: data.body.expiresIn,
                })
            })
            .catch(err => {
                next(err)
            })
    }
    static async lyric(req, res, next) {
        try {
            if(!req.query.artist || !req.query.track){
                throw({name:"Data Not Found"})
            }
            const api = `https://api.lyrics.ovh/v1/${req.query.artist}/${req.query.track}`
            console.log(api)
            const result = await axios.get(api)
            if(!result){
                throw({name:"Data Not Found"})
            }
            res.status(200).json({lirik:result.data})
        } catch (error) {
            next(error)
        }
    }
}

module.exports = userController;