const { HLTV } = require('hltv')

class Controller {

    static async getRanks(req, res) {
        try {
            let data = await HLTV.getTeamRanking()
            res.status(200).json(data)
        } catch (error) {
            res.status(500).json({ message: 'Internal server error' })
        }
    }

}

module.exports = Controller