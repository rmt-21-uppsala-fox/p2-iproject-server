const errorHandler = async (err, req, res, next) => {
  if (
    err.name === "SequelizeValidationError" ||
    err.name === "SequelizeUniqueConstraintError"
  ) {
    res.status(400).json(err.errors[0].message);
  } else if (err.message === "INVALID_USER") {
    res.status(400).json({ message: "Invalid email/password" });
  } else if (
    err.name === "JsonWebTokenError" ||
    err.message === "INVALID_TOKEN"
  ) {
    res.status(401).json({ message: "Invalid Token" });
  } else {
    res.json(err);
  }
};

module.exports = errorHandler;
