const {
    ScrapeChapter,
    ScrapeDetail,
    ScrapeListGenre,
} = require('../scraper/boxnovelScraper');

class NovelController {
    static async NovelChapter(req, res, next) {
        try {
            const title = req.params.title;
            const chapter = req.params.chapter;
            const result = await ScrapeChapter(title, chapter);
            res.status(200).json(result);
        } catch (err) {
            console.log(err);
            next(err);
        }
    }

    static async NovelDetail(req, res, next) {
        try {
            const title = req.params.title;
            const result = await ScrapeDetail(title);
            res.status(200).json(result);
        } catch (err) {
            console.log(err);
            next(err);
        }
    }

    static async NovelListGenre(req, res, next) {
        try {
            const genre = req.params.genre;
            const order = req.query.order;
            const result = await ScrapeListGenre(genre, order);
            res.status(200).json(result);
        } catch (err) {
            console.log(err);
            next(err);
        }
    }
}

module.exports = NovelController;
