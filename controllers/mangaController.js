const axios = require("axios");
let baseUrl = "https://kitsu.io/api/edge/manga";

class MangaController {
	static async mangaGetAll(req, res, next) {
		try {
			const { page } = req.query;
			if (page) {
				baseUrl += `?page%5Blimit%5D=12&page%5Boffset%5D=0/episode`;
			} else {
				baseUrl += `?page%5Blimit%5D=12&page%5Boffset%5D=0/episode`;
			}
			const response = await axios({
				method: "GET",
				url: baseUrl,
				headers: {
					Content_Type: "application/json",
				},
			});
			res.status(200).json(response.data.data);
		} catch (err) {
			console.log(err);
			next(err);
		}
	}

	static async mangaGetById(req, res, next) {
		try {
			const { id } = req.params;
			const response = await axios({
				method: "GET",
				url: `${baseUrl}/${id}`,
				headers: {
					Content_Type: "application/json",
				},
			});
			res.status(200).json(response.data.data);
		} catch (err) {
			console.log(err);
			next(err);
		}
	}
}

module.exports = MangaController;
