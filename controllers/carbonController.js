const axios = require('axios');

class CarbonController {
    static async getCarbonValue(req, res, next) {
        try {
            const { distance, fuelEfficiency } = req.query;
            console.log(distance, fuelEfficiency);
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
            console.log(error);
            console.log(error.message);
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
            console.log(response.data);
            const fuelEfficiency = response.data[0].combination_mpg;
            res.status(200).json({
                fuelEfficiency
            })
        } catch (error) {
            // console.log(error);
            console.log(error.message);
        }
    }
}

module.exports = CarbonController;