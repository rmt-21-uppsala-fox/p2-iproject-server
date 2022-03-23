const { HLTV } = require("hltv");

class Controller {
    static async getTeamRanks(req, res) {
        try {
            let data = await HLTV.getTeamRanking();
            res.status(200).json(data);
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: "Internal server error" });
        }
    }

    static async getMatches(req, res) {
        try {
            let data = await HLTV.getMatches();
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({ message: "Internal server error" });
        }
    }

    static async getPlayer(req, res) {
        try {
            let { name } = req.params;
            let findPlayer = await HLTV.getPlayerByName({ name: name });
            if (!findPlayer) {
                throw { name: "Not found" };
            }
            res.status(200).json(findPlayer);
        } catch (error) {
            console.log(error);
            if (error.name === "Not found") {
                res.status(404).json({ message: "Player not found" });
            } else if (error.name === "Error") {
                res.status(404).json({ message: "Player not found" });
            } else {
                res.status(500).json({ message: "Internal server error" });
            }
        }
    }

    static async getPlayerRanking(req, res) {
        try {
            let playerRank = await HLTV.getPlayerRanking();
            res.status(200).json(playerRank);
        } catch (error) {
            res.status(500).json({ message: "Internal server error" });
        }
    }

    static async getNews(req,res){
        try {
            let news = await HLTV.getNews();
            res.status(200).json(news);
        } catch (error) {
            res.status(500).json({ message: "Internal server error" });
        }
    }
}

module.exports = Controller;
