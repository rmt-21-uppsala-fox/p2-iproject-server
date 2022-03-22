const {
    verifyToken
} = require("../helpers/jwt");
const {
    User,
    Bookmark,
} = require("../models");
const authentication = async (req, res, next) => {
    try {
        let {
            access_token
        } = req.headers;
        let decodedPayload = verifyToken(access_token);
        const foundUser = await User.findOne({
            where: {
                id: decodedPayload.id
            }
        });
        if (!foundUser) {
            throw {
                name: "Unauthorized",
            };
        } else {
            req.loginUser = {
                id: foundUser.id,
                username: foundUser.username,
                role: foundUser.role,
            };
            next();
        }
    } catch (error) {
        console.log(error);
        next(error);
    }
};

const authorization = async (req, res, next) => {
    try {
        const BookmarkId = +req.params.id;
        const UserId = req.loginUser.id;
        const findBookmark = await Bookmark.findOne({
            where: {
                id: BookmarkId
            }
        });
        if (!findBookmark) {
            throw {
                name: "NotFound"
            };
        }
        if (findBookmark.UserId !== UserId) {
            throw {
                name: "Forbidden"
            }
        }
        next();
    } catch (error) {
        console.log(error);
        next(error);
    }
}

module.exports = {
    authentication,
    authorization
}