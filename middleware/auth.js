const { verifyToken } = require("../helpers/helpers");
const { User } = require("../models");

const authentification = async (req, res, next) => {
   try {
      const { access_token } = req.headers;
      const checkToken = verifyToken(access_token);
      if (!checkToken) {
         throw new Error("Invalid token");
      }

      let id = checkToken.id
      const userLoginData = await User.findByPk(id)

      if (!userLoginData) {
         throw new Error("Invalid token");
      }

      req.userAccessLogin = {
         id: userLoginData.id,
         schoolId: userLoginData.schoolId,
      }

      next();

   } catch (error) {
      console.log(error);
      next(error);
   }
}

module.exports = {
   authentification
}