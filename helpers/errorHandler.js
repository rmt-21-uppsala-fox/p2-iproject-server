function errorHandler(err, req, res, next) {
  console.log(err.name, err, "ERROR HANDLER");

  let errors = [];
  switch (err.name) {
    case "SequelizeValidationError":
      err.errors.forEach((e) => {
        errors.push(e.message);
      });
      res.status(400).json({ Error: errors });
      errors = [];
      break;
    case "SequelizeUniqueConstraintError":
      err.errors.forEach((e) => {
        errors.push(e.message);
      });
      res.status(400).json({ Error: errors });
      errors = [];
      break;
    case "JsonWebTokenError":
      res.status(401).json({ Error: "Invalid token" });
      break;
    case "TokenExpiredError":
      res.status(401).json({ Error: "Token expired" });
      break;
    case "authenticationNoUser":
      res.status(401).json({ Error: "Invalid token or user" });
      break;
    case "authorizationFailed":
      res.status(403).json({ Error: "Forbidden to modify item" });
      break;
    case "authzPatchFailed":
      res.status(403).json({ Error: "Forbidden to modify item" });
      break;
    case "loginNoInput":
      res.status(401).json({ Error: "Email and Password is required" });
      break;
    case "registerNoInput":
      res.status(401).json({ Error: "Email and Password is required" });
      break;
    case "adminLoginFailed":
      res.status(401).json({ Error: "Wrong email or password" });
      break;
    case "registerEmailDuplicate":
      res.status(400).json({ Error: "Email already registered" });
      break;
    case "generalFavoriteNotFound":
      res.status(404).json({ Error: "Error favorite not found" });
      break;
    case "generalFavoriteDuplicate":
      res.status(400).json({ Error: "Anime already favorited" });
      break;
    case "deleteFavoriteNotFound":
      res.status(404).json({ Error: "Error favorite not found" });
      break;
    case "googleRegUserNotFound":
      res.status(401).json({ Error: "User not found" });
      break;
    case "userDataNotFound":
      res.status(401).json({ Error: "User not found" });
      break;
    default:
      res.status(500).json({ Error: "Internal server error" });
      break;
  }
}

module.exports = errorHandler;
