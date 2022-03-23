const SpotifyWebApi = require("spotify-web-api-node")
const {transporter} = require('../helper/nodemailer')
class userController {
    static async preLogin(req, res, next){
        try {
            console.log('test')
            let mailOptions = {
                from: "testinghaloprof@gmail.com",
                to: 'bintangmuhammadwahid@gmail.com',
                subject: "Hacktiv Music Login",
                text: `Telah Login di Hacktiv Music Login, silahkan masukkan akun spotify anda untuk melanjutkan`,
            };

            transporter.sendMail(mailOptions, (err, info) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log("Email Sent:" + info.response);
                }
            });
            console.log('sukses')
            res.status(200).json({msg:"Sukses"})
        } catch (error) {
            console.log('gagal')
            next(error)
        }
    }
    static login(req, res, next) {
        const {code} = req.body
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
                })
            })
            .catch(err => {
                next(err)
            })
    }
    static lyric(req, res, next) {
        const api = `https://api.lyrics.ovh/v1/${req.query.artist}/${req.query.track}`
        axios
            .get(api)
            .then(result => {
                res.status(200).json(result.data)
            })
            .catch(error => {
                next(error)
            })
    }
}

module.exports = userController;