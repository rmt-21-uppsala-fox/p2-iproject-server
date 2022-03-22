const errorHandler = (err, req, res, next) => {
  let code = 500;
  let message = "Internal server error";
  switch (err.name) {
    case "SequelizeValidationError":
    case "SequelizeUniqueConstraintError":
      code = 400;
      message = err.errors[0].message;
      break;
    case "BadRequestEmail":
      code = 400;
      message = "Email is required";
      break;
    case "BadRequestPassword":
      code = 400;
      message = "Password is required";
      break;
    case "Unauthorized":
      code = 401;
      message = "Invalid email/password";
      break;
    case "JsonWebTokenError":
      code = 401;
      message = "Invalid token";
      break;
    case "Forbidden":
      code = 403;
      message = "You are not authorized";
      break;
    case " NotFound":
      code = 404;
      message = "Not found";
      break;

    default:
      break;
  }
  res.status(code).json({ message });
};

module.exports = errorHandler;
