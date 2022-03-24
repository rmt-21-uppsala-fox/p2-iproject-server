const axios = require("axios");
async function cheapSharkAPI(req, res, next) {
  try {
    const { search = "", page = 0 } = req.query;
    const resp = await axios({
      method: "get",
      url: "https://cheapshark-game-deals.p.rapidapi.com/deals",
      params: {
        title: search,
        pageSize: "10",
        storeID: "1",
        sortBy: "Deal Rating",
        pageNumber: page + "",
      },
      headers: {
        "X-RapidAPI-Host": "cheapshark-game-deals.p.rapidapi.com",
        "X-RapidAPI-Key": process.env.CHEAP_SHARK_API,
      },
    });
    res.status(200).json(resp.data);
  } catch (err) {
    next(err);
  }
}
module.exports = cheapSharkAPI;
