
function errorHandler(err, req, res, next) {
  if (err.code) {
    res.status(err.code).json({
      message: err.msg
    })
  } else {
    let message, code
    if (err.name == "SequelizeValidationError") {
      code = 400,
        message = err.errors[0].message
    } else if (err.name == "SequelizeForeignKeyConstraintError") {
      code = 404,
        message = err.errors[0].message
    } else if (err.name == "SequelizeUniqueConstraintError") {
      code = 400
      message = err.errors[0].message
    } else if (err.name == "JsonWebTokenError") {
      code = 401
      message = "Invalid Token"
    } else {
      code = 500
      message = "Internal server error"
    }
    res.status(code).json({ message })
  }
}

module.exports = { errorHandler }
