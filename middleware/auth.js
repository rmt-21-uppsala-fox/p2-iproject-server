const { verifyToken } = require("../helpers/helpers");

const authentification = async (req, res, next) => {
   try {
      const { access_token } = req.headers;
      const checkToken = verifyToken(access_token);
      if (!checkToken) {
         throw new Error("Invalid token");
      }

      let id = payload.id
      const userLoginData = await User.findByPk(id)

      if (!userLoginData) {
         throw {
            name: "Invalid Token"
         }
      }

      req.userAccessLogin = {
         id: userLoginData.id,
         email: userLoginData.email,
         firstName: userLoginData.firstName,
         lastName: userLoginData.lastName,
         schoolId: userLoginData.schoolId,
         role: userLoginData.role
      }

      next();

   } catch (error) {
      next(error);
   }
}

module.exports ={
   authentification
}