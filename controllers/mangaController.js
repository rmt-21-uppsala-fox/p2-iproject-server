const axios = require("axios");
let baseUrl = "https://kitsu.io/api/edge/manga";

class MangaController {
	static async mangaGetAll(req, res, next) {
		try {
			let { page, filter } = req.query;
			const limit = 18;
			let offset = 0;
			if (!page) {
				baseUrl += `?page%5Blimit%5D=${limit}&page%5Boffset%5D=${offset}/episode`;
			} else {
				offset = 18 * page;
				baseUrl += `?page%5Blimit%5D=${limit}&page%5Boffset%5D=${offset}/episode`;
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
			next(err);
		}
	}

	static async mangaGetById(req, res, next) {
		try {
			const { id } = req.params;
			const manga = await axios({
				method: "GET",
				url: `https://kitsu.io/api/edge/manga/${id}`,
				headers: {
					Content_Type: "application/json",
				},
			});
			res.status(200).json(manga.data.data);
		} catch (err) {
			next(err);
		}
	}
}

module.exports = MangaController;
