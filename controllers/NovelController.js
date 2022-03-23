class NovelController {
    static async NovelListAndGenre(req, res) {
        try {
            const genre = req.params.genre;
            const order = req.query.order;
            res.status(200).json('hai');
        } catch (err) {
            next(err);
        }
    }

    static async NovelChapter(req, res, next) {
        try {
            const title = req.params.title;
            const chapter = req.params.chapter;
            res.status(200).json('hello');
        } catch (err) {
            next(err);
        }
    }

    static async NovelDetail(req, res, next) {
        try {
            const title = req.params.title;
            res.status(200).json('uwo');
        } catch (err) {
            next(err);
        }
    }
}

module.exports = NovelController;
