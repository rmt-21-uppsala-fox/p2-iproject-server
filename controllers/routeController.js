const axios = require('axios');

class RouteController {
    static async getMatchRoute(req, res, next) {
        try {
            let { coordinates, radiuses } = req.query;
            coordinates = coordinates.replace(";", "%3B").replace(",", "%2C");
            radiuses = radiuses.replace(";", "%3B");
            const response = await axios({
                method: 'GET',
                url:
                    `https://api.mapbox.com/matching/v5/mapbox/driving/${coordinates}?=alternatives=true&annotations=distance&geometries=geojson&radiuses=${radiuses}&steps=true&access_token=${process.env.MAPBOX_API_TOKEN}`
            })
            const data = response.data;
            if (data.code !== 'Ok') {
                throw {
                    name: "getRouteError",
                    message: `${data.code} - ${data.message}.\n\nFor more information: https://docs.mapbox.com/api/navigation/map-matching/#map-matching-api-errors`
                }
            }
            const coords = data.matchings[0].geometry;

            res.status(200).json({
                coords,
                distance: {
                    value: data.matchings[0].distance,
                    unit: "m"
                }
            })
        } catch (error) {
            next(error);
        }

    }
}

module.exports = RouteController;