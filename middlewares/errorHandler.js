const express = require('express')
const app = express()
app.use(express.urlencoded({ extended: false }))

const errorHandler = (err, req, res, next) => {
    switch (err.name) {
        case "NOT_ENOUGH_PERMISSION":
            res.status(err.code).json({ message: err.message });
            break

        case "BAD_REQUEST":
            res.status(err.code).json({ message: err.message });
            break
            
        case "NOT_FOUND":
            res.status(err.code).json({ message: err.message });
            break

        case "Unauthorized":
            res.status(err.code).json({ message: err.message });
            break

        case "SequelizeUniqueConstraintError":
            const errorsUnique = err.errors.map((err) => err.message)
            res.status(400).json({ message: errorsUnique })
            break

        case "SequelizeValidationError":
            const errorsValidate = err.errors.map((err) => err.message)
            res.status(400).json({ message: errorsValidate })
            break

        default:
            res.status(500).json({ message: "internal server error", error: err.message })
            
            break
    }
}

// app.use (function(err, req, res, next) {
//     console.log(err, " <<<<<<<<<< INI ERROR HANDLER")
//     if (err.name === "Unauthorized") {
//       res.status(err.code).json({message: err.message})
//     } else  if (err.name === "SequelizeUniqueConstraintError") {
//       const errors = err.errors.map((err)=> err.message)
//       res.status(400).json({message: errors})
//   } else if (err.name === "SequelizeValidationError"){
//       const errors = err.errors.map((err)=> err.message)
//       res.status(400).json({message: errors})
//   }  else {
//       res.status(500).json({message: "internal server error"})
//     }

module.exports = errorHandler