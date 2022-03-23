const axios = require('axios');
const screenshot = require('screenshot-desktop');
const nodemailer = require("nodemailer");

class CarbonController {
    static async getCarbonValue(req, res, next) {
        try {
            const { distance, fuelEfficiency } = req.query;
            const response = await axios({
                method: 'POST',
                url: 'https://api-prod-no-cert.cloverly.com/2021-10/estimates/vehicle',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${process.env.CLOVERLY_API_TOKEN}`
                },
                data: {
                    distance: { value: distance, units: 'km' }, //km/l mpg 1/1000km
                    fuel_efficiency: { value: fuelEfficiency, units: 'mpg', of: 'gasoline' } //diesel / gasoline
                }
            })
            const data = response.data.total_co2e_in_kg;
            res.status(200).json({
                carbonProducedInKg: data
            })
        } catch (error) {
            next(error);
        }
    }

    static async getFuelEfficiency(req, res, next) {
        try {
            const { model, year } = req.query
            const response = await axios({
                method: 'GET',
                url: "https://api.api-ninjas.com/v1/cars",
                params: {
                    model,
                    year
                },
                headers: {
                    'X-Api-Key': process.env.NINJAS_API_TOKEN
                },
            })
            const fuelEfficiency = response.data[0].combination_mpg;
            res.status(200).json({
                fuelEfficiency
            })
        } catch (error) {
            next(error);
        }
    }

    static async screenshot(req, res, next) {
        screenshot({ format: 'png' }).then((img) => {
            const { carbon, email } = req.body;
            let transporter = nodemailer.createTransport({
                service: "gmail",
                secure: false, // use SSL
                port: 25, // port for secure SMTP
                auth: {
                    user: "appcarbon80@gmail.com",
                    pass: "c4rb0n1234",
                },
                tls: {
                    rejectUnauthorized: false
                }
            });

            let mailOptions = {
                from: "appcarbon80@gmail.com",
                to: email,
                subject: "Carbon Route Calculation",
                text: `The route you choose will produce estimated ${carbon} Kg^3`,
                attachments: [
                    {   // binary buffer as an attachment
                        filename: 'route.png',
                        content: img
                    },
                ]
            };
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    throw { email: "sentEmailFailed" }
                } else {
                    res.status(200).json({ message: "email has been sent" })
                }
            });
        }).catch((error) => {
            console.log(error.message);
            next(error)
        })
    }
}

module.exports = CarbonController;