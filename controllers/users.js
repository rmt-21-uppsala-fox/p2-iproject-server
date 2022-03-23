const { compare, hash } = require("../helpers/bcrypt");
const { signToken } = require("../helpers/jwt");
const { OAuth2Client } = require("google-auth-library");
const clientID = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
// Import the functions you need from the SDKs you need
const { initializeApp } = require ("firebase/app");
const { getFirestore, doc, collection, addDoc, getDoc } = require ('firebase/firestore');

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
      if (checkUser.exists()) {
        const newUser = checkUser.data()
        // console.log(newUser, `MASUK`);
        res.status(201).json({id: response._key.path.segments[1],email: newUser.email});
      } else {
        throw {
          throw: true,
          status: 500,
          message: 'internal server error'
        }
      }
    } catch (error) {
      next(error);
    }
  }

  static async loginGoogle(req, res, next) {
    try {
      const { googleToken } = req.body;
      const ticket = await clientID.verifyIdToken({
        idToken: googleToken,
        audience: process.env.CLIENT_ID,
      });

      const payload = ticket.getPayload();

      let [user, isCreated] = await User.findOrCreate({
        where: {
          email: payload.email,
        },
        defaults: {
          email: payload.email,
          password: payload.email,
          role: "user",
        },
      });

      if (!isCreated && user.address) {
        const payload = {
          userId: user.id,
          email: user.email,
          role: user.role,
        };

        const token = signToken(payload);

        res
          .status(201)
          .json({ email: user.email, isCreated, access_token: token });
      } else {
        res.status(201).json({ email: user.email, isCreated });
      }
    } catch (error) {
      next(error);
    }
  }

  static async addBookmark(req, res, next) {
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

  static async deleteBookmark(req, res, next) {
    try {
      const { bookmarkId } = req.params;

      await Bookmark.destroy({
        where: {
          id: bookmarkId,
        },
      });
      res.status(201).json({ message: `Removed from Watch List` });
    } catch (error) {
      next(error);
    }
  }

  static async getBookmark(req, res, next) {
    try {
      const { role, UserId } = req.user;

      const bookmarks = await Bookmark.findAll({
        include: {
          model: Job,
          include: {
            model: Company,
          },
        },
        where: {
          UserId,
        },
      });

      res.status(200).json(bookmarks);
    } catch (error) {
      next(error);
    }
  }

  static async getJobs(req, res, next) {
    try {
      const { jobType, company, page } = req.query;
      // console.log(jobType, company, page, `page`);
      const search = {
        include: {
          model: Company,
        },
        where: {
          status: {
            [Op.not]: "archived",
          },
        },
        limit: 8,
        order: [["id", "ASC"]],
      };
      if (jobType) {
        search.where.jobType = jobType;
      }
      if (company) {
        search.where.companyId = company;
      }
      if (page) {
        search.offset = 8 * (page - 1);
      }
      // console.log(search , `search`);
      let jobs = await Job.findAndCountAll(search);
      let pages = Math.ceil(jobs.count / 8);
      // console.log(jobs);
      // console.log(pages, jobs.count);
      res.status(200).json({ count: pages, jobs: jobs.rows });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = ControllerUsers;
