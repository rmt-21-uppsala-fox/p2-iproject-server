const errorHandler = async (err, req, res, next) => {
  if (
    err.name === "SequelizeValidationError" ||
    err.name === "SequelizeUniqueConstraintError"
  ) {
    res.status(400).json(err.errors[0].message);
  } else if (err.message === "INVALID_USER") {
    res.status(400).json({ message: "Invalid email/password" });
  } else {
    res.json(err.name);
  }
};

module.exports = errorHandler;
