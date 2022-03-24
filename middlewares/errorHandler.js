const errorHandler = (err, req, res, next) => {
  // console.log(err)
  let code, message;
  console.log(err.name);
  switch (err.name) {
    case "SequelizeDatabaseError": //Error validation saat create / update.
      code = 400;
      // console.log("<<<<<<<<<<<<<<<<<")
      message = "Data not match";
      break;
    case "SequelizeValidationError": //Error validation saat create / update.
      code = 400;
      // console.log("<<<<<<<<<<<<<<<<<")
      message = err.errors.map((el) => el.message);
      break;
    case "SequelizeUniqueConstraintError": //Error validation saat create / update.
      code = 400;
      // console.log(">>>>>>>>>>>>>>>>>>>>")
      message = "Email has been used";
      break;
    case "Email and Password Invalid": //Error login user not found atau password not matched
      code = 401;
      message = "Email and Password Invalid";
      break;
    case "Token Required": // Error authentication
      code = 401;
      message = "Token Required";
      break;
    case "JsonWebTokenError": // Error authentication
    case "User not found": // Error authentication
      code = 401;
      message = "Invalid Token";
      break;
    case "Not Found": //Not Found
      code = 404;
      message = "Not Found";
      break;
    case "You dont have access": // Forbidden error di authorization
      code = 403;
      message = "You dont have access";
      break;
    case "You've already add this food to your favorite":
      code = 401;
      message = "You've already add this food to your favorite";
      break;
    default:
      //Internal Server Error
      code = 500;
      message = "Internal Server Error";
      break;
  }
  res.status(code).json({ message });
};

module.exports = errorHandler;
