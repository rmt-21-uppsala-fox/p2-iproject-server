const { verifyToken } = require("../helpers/jwt");
const { Users } = require("../controllers/users");

let authc = async (req, res, next) => {
  try {
    const { access_token } = req.headers;
    // console.log(`masuk AUTH`, access_token);
    const payload = verifyToken(access_token);
    // console.log(payload, `MASUK ATUH`);

    const userSnapshot = await Users.doc(payload.id).get()
    const user = userSnapshot.data()
    // console.log(payload, userSnapshot.id, user, `AUTHC DATA`);
    
    if (!user) {
      throw {
        name: `JsonWebTokenError`,
      };
    }

    req.user = {
      UserId: userSnapshot.id,
      email: user.email,
    };

    next();
  } catch (error) {
    next({name: 'JsonWebTokenError'});
  }
};

module.exports = authc;
