const wlnApi = require('../api/wlnApi');

class NovelApiController {
    static async NovelApi(req, res, next) {
        try {
            const result = await wlnApi();
            res.status(200).json(result);
        } catch (err) {
            next(err);
        }
    }
}

module.exports = NovelApiController;
