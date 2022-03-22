if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const axios = require("axios");

class HotelController {
  static async getHotels(req, res, next) {
    try {
      const response = await axios({
        method: "get",
        url: "https://hotels4.p.rapidapi.com/properties/list",
        params: {
          destinationId: "659455",
          pageNumber: "1",
          pageSize: "25",
          checkIn: "2020-01-08",
          checkOut: "2020-01-15",
          adults1: "1",
          sortOrder: "PRICE_HIGHEST_FIRST",
          locale: "id_ID",
          currency: "IDR",
          accommodationIds: "1",
        },
        headers: {
          "x-rapidapi-host": "hotels4.p.rapidapi.com",
          "x-rapidapi-key": process.env.X_RAPIDAPI_KEY,
        },
      });
      const hotelData = response.data;
      delete hotelData.data.body.sortResults;
      delete hotelData.data.body.filters;
      delete hotelData.data.body.pointOfSale;
      delete hotelData.data.body.miscellaneous;
      delete hotelData.data.body.pageInfo;
      delete hotelData.data.common;
      hotelData.data.body.searchResults.results.forEach((el) => {
        delete el.geoBullets;
        delete el.deals;
        delete el.messaging;
        delete el.badging;
        delete el.pimmsAttributes;
        delete el.isAlternative;
      });
      res.status(200).json(hotelData);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal server error" });
    }
  }
}

module.exports = HotelController;
