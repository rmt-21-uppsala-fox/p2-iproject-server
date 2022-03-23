const rajaOngkirApi = require("../apis/rajaOngkir");

class RajaOngkirControllers {
  static async getCities(req, res, next) {
    try {
      const response = await rajaOngkirApi.get("/city", {
        params: {
          province: 9,
        },
      });
      res.status(200).json(response.data);
    } catch (error) {
      next(error);
    }
  }

  static async postCosts(req, res, next) {
    try {
      const { origin, destination, weight, courier } = req.body;

      const response = await rajaOngkirApi.post("/cost", {
        origin,
        destination,
        weight,
        courier,
      });
      res.status(200).json(response.data);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
}

module.exports = RajaOngkirControllers;
