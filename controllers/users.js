const { compare, hash } = require("../helpers/bcrypt");
const { signToken } = require("../helpers/jwt");
const axios = require("axios");
const { OAuth2Client } = require("google-auth-library");
const clientID = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
// Import the functions you need from the SDKs you need
const {
  initializeApp,
  applicationDefault,
  cert,
} = require("firebase-admin/app");
const {
  getFirestore,
  Timestamp,
  FieldValue,
} = require("firebase-admin/firestore");

const serviceAccount = require("../samine-1e9f3-firebase-adminsdk-i8j0i-6f5bc8931f.json");

initializeApp({
  credential: cert(serviceAccount),
});

const db = getFirestore();

const Users = db.collection("Users");
const Favorites = db.collection("Favorites");
// const { exists, data } = require ('fs')
class ControllerUsers {
  static async register(req, res, next) {
    try {
      const { email, password } = req.body;
      if (!email) {
        throw {
          name: "registerNoInput",
        };
      }
      if (!password) {
        throw {
          name: "registerNoInput",
        };
      }

      let snapshots = await Users.where("email", "==", email).get();
      let emails = [];
      snapshots.forEach((e) => {
        // console.log(e.data(), `ENTRY`);
        emails.push(e.data());
      });

      if (emails.length > 0) {
        throw {
          name: "registerEmailDuplicate",
        };
      }

      const response = await Users.add({
        email,
        password: hash(password),
      });

      //! CONFIRMATION NODEMAILER

      const userSnapshot = await Users.doc(
        `${response._path.segments[1]}`
      ).get();
      const newUser = userSnapshot.data();
      // console.log(newUser, `checkUser`);
      // console.log(checkUser);
      // nama collection
      // Users:index

      // let emails = await collection(firestore, 'Users').where('email' == 'test').get()
      // console.log(emails.data(), `EMAIL`);

      res
        .status(201)
        .json({ id: response._path.segments[1], email: newUser.email });
      // snapshots 2 kali
    } catch (error) {
      next(error);
    }
  }

  static async login(req, res, next) {
    try {
      // console.log(`MASUK`);
      const { email, password } = req.body;
      if (!email) {
        throw {
          name: "loginNoInput",
        };
      }
      if (!password) {
        throw {
          name: "loginNoInput",
        };
      }

      let snapshots = await Users.where("email", "==", email).get();
      let users = [];
      snapshots.forEach((e) => {
        // console.log(e.data(), `ENTRY`);
        users.push([e.id, e.data()]);
      });

      // console.log(users, `USERS`);

      if (users.length < 1) {
        throw {
          name: "adminLoginFailed",
        };
      }

      const comparePassword = compare(password, users[0][1].password);

      if (!comparePassword) {
        throw {
          name: "adminLoginFailed",
        };
      }

      const payload = {
        id: users[0][0],
        email: users[0][1].email,
      };

      const token = signToken(payload);

      res.status(200).json({ access_token: token });
    } catch (error) {
      next(error);
    }
  }

  static async addFavorite(req, res, next) {
    try {
      const { UserId } = req.user;
      const { AnimeId } = req.body;
      const { data } = await axios.get(
        `https://api.jikan.moe/v4/anime/${AnimeId}`
      );
      let snapshots = await Favorites.where("AnimeId", "==", AnimeId).get();
      let favoritesArr = [];
      // console.log(`masuk`, AnimeId, snapshots);
      snapshots.forEach((e) => {
        // console.log(`MASUK LOOP`);
        // console.log(e, e.data(), `ENTRY`);
        favoritesArr.push(e.data());
      });

      if (favoritesArr.length > 0) {
        throw {
          name: "generalFavoriteDuplicate",
        };
      }
      // const job = await Job.findByPk(JobId);

      // if (!job) throw { name: "generalJobNotFound" };

      // console.log(UserId, `UserId`);
      const response = await Favorites.add({
        UserId,
        AnimeId,
        anime: data,
      });

      const favoriteSnapshot = await Favorites.doc(
        `${response._path.segments[1]}`
      ).get();
      const newFavorite = favoriteSnapshot.data();

      res.status(201).json(newFavorite);
    } catch (error) {
      next(error);
    }
  }

  static async deleteFavorites(req, res, next) {
    try {
      const { favoriteId } = req.params;

      const response = await Favorites.doc(favoriteId).delete();

      res.status(200).json({ message: "Favorite has been deleted" });
    } catch (error) {
      next(error);
    }
  }

  static async getFavorites(req, res, next) {
    try {
      const { UserId } = req.user;

      let snapshots = await Favorites.where("UserId", "==", UserId).get();
      let favoritesArr = [];

      snapshots.forEach((e) => {
        favoritesArr.push({
          id: e.id,
          AnimeId: e.data().AnimeId,
          anime: e.data().anime,
        });
      });
      res.status(200).json(favoritesArr);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = { ControllerUsers, Favorites, Users };
