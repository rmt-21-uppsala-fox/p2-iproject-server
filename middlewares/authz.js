const { Favorites } = require("../controllers/users");

const authorization = async (req, res, next) => {
  try {
    const { UserId } = req.user;
    const { favoriteId } = req.params;

    const favoriteSnapshot = await Favorites.doc(favoriteId).get()
    const favorite = favoriteSnapshot.data()
    console.log(favorite);
    if (favorite.UserId !== UserId) {
      throw {
        name: "authorizationFailed"
      }
    }

    next();
  } catch (error) {
    next({name: "authorizationFailed"});
  }
};

module.exports = authorization;
