const errorHandler = (error, req, res, next) => {
  console.log(error);
  if (
    error.name === "SequelizeValidationError" ||
    error.name === "SequelizeUniqueConstraintError"
  ) {
    res.status(400).json({ message: error.errors[0].message });
  } else if (error.name === "JsonWebTokenError") {
    res.status(401).json({ message: "Invalid user token" });
  } else if (error.name === "Bad Request") {
    res.status(400).json({ message: error.message });
  } else if (error.name === "Login Error") {
    res.status(401).json({ message: error.message });
  } else if (error.name === "Forbidden") {
    res.status(403).json({ message: error.message });
  } else if (error.name === "Not Found") {
    res.status(404).json({ message: error.message });
  } else {
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = errorHandler;
