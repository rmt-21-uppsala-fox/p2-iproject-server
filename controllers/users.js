const { compare, hash } = require("../helpers/bcrypt");
const { signToken } = require("../helpers/jwt");
const { OAuth2Client } = require("google-auth-library");
const clientID = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
// Import the functions you need from the SDKs you need
const { initializeApp } = require ("firebase/app");
const { getFirestore, doc, collection, addDoc, getDoc } = require ('firebase/firestore');
// const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
// const { getFirestore, doc, collection, addDoc, getDoc  } = require('firebase-admin/firestore');

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAucNZND1DQzw2GDLrNULscSD6n-t4-3jI",
  authDomain: "samine-1e9f3.firebaseapp.com",
  projectId: "samine-1e9f3",
  storageBucket: "samine-1e9f3.appspot.com",
  messagingSenderId: "215870080992",
  appId: "1:215870080992:web:e80f5c00bd824273fb4d85"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const firestore = getFirestore()
// const db = firebaseApp.firestore()

const Users = collection(firestore, 'Users')
const Favorites = collection(firestore, 'Favorites')
// const { exists, data } = require ('fs')
class ControllerUsers {
  static async register(req, res, next) {
    try {
      const { email, password } = req.body;
      const response = await addDoc(Users, {
        email,
        password: hash(password)
      })
      const checkUser = await getDoc(doc(firestore, `Users/${response._key.path.segments[1]}`))
      // console.log(checkUser);
      // nama collection
      // Users:index

      // snapshosts 2 kali
      if (checkUser.exists()) {
        const newUser = checkUser.data()
        // console.log(newUser, `MASUK`);
        res.status(201).json({id: response._key.path.segments[1],email: newUser.email});
      } else {
        throw {
          throw: true,
          status: 500,
          message: 'Fail Firestore'
        }
      }
    } catch (error) {
      next(error);
    }
  }

  static login(req, res, next) {
    try {
      
    } catch (error) {
      
    }
  }

  static async addFavorite(req, res, next) {
    try {
      const { UserId } = req.user;
      const { AnimeId } = req.body;

      // const job = await Job.findByPk(JobId);

      // if (!job) throw { name: "generalJobNotFound" };

      const response = await addDoc(Favorites, {
        UserId,
        AnimeId: 1
      })
      res.status(201).json(response);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = ControllerUsers;
