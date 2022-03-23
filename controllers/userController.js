const { User } = require("../models/index");
const firebase = require("../config/db");
const {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} = require("firebase/auth");
const auth = getAuth(firebase);
const { comparePw } = require("../helpers/bcrypt");
const { signToken } = require("../helpers/jwt");
class UserController {
  static async registration(req, res, next) {
    try {
      const { email, password, username, profilePict } = req.body;
      const data = await createUserWithEmailAndPassword(auth, email, password);
      await User.create({
        email,
        firebaseUID: data.user.uid,
        username,
        profilePict,
      });
      res.status(201).json({ message: "User Created" });
    } catch (error) {
      next(error);
    }
  }

  static async login(req, res, next) {
    try {
      const { email, password } = req.body;
      const respond = await User.findOne({ where: { email: email } });
      if (!respond) {
        throw new Error("INVALID_USER");
      }
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const token = signToken({
        id: respond.id,
        username: respond.username,
        uid: userCredential.user.uid,
      });
      res.status(200).json({ access_token: token });
    } catch (error) {
      next(error);
    }
  }

  static signOut(req, res, next) {
    signOut(auth)
      .then(() => {
        res.status(200).json({ message: "Logout success" });
      })
      .catch((error) => {
        next(error);
      });
  }
}

module.exports = UserController;
