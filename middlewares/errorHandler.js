const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: false }));

const errorHandler = (err, req, res, next) => {
  switch (err.name) {
    case "LOGIN_DATA_REQUIRED":
      res.status(400).json({
        message: err.message,
      });
      break;
      
    case "Unauthorized":
      res.status(err.code).json({
        message: err.message,
      });
      break;

      case "PURCHASE_DUPLICATE":
        res.status(err.code).json({
          message: err.message,
        });
        break;

    case "NOT_FOUND":
      res.status(err.code).json({ message: err.message });
      break;

    case "NOT_ENOUGH_PERMISSION":
      res.status(err.code).json({ message: err.message });
      break;

      
      case "JsonWebTokenError":
        res.status(401).json({ message: "Invalid Token" });
        break;

    case "SequelizeUniqueConstraintError":
      const errUnique = err.errors.map((err) => err.message)
      res.status(400).json({ message: errUnique })
      break;

    case "SequelizeDatabaseError":

      res.status(400).json({ message: err })
      break;

    case "SequelizeValidationError":
      const errValid = err.errors.map((err) => err.message)
      res.status(400).json({ message: errValid })
      break;

    default:
      //console.log(err, "INI ERROR INTERNAL SERVER")
      res.status(500).json({ message: "internal server error" });
      break;
  }
};

module.exports = errorHandler
