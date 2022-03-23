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
}

module.exports = NovelController;
