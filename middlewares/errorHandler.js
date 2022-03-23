const errorHandler = async (err, req, res, next) => {
  if (
    err.name === "SequelizeValidationError" ||
    err.name === "SequelizeUniqueConstraintError"
  ) {
    res.status(400).json(err.errors[0].message);
  } else if (
    err.message === "INVALID_USER" ||
    err.code === "auth/wrong-password"
  ) {
    res.status(400).json({ message: "Invalid email/password" });
  } else if (
    err.name === "JsonWebTokenError" ||
    err.message === "INVALID_TOKEN"
  ) {
    res.status(401).json({ message: "Invalid Token" });
  } else if (err.message === "FORBIDDEN") {
    res.status(403).json({ message: "FORBIDDEN" });
  } else if (err.message === "POST_NOT_FOUND") {
    res.status(404).json({ message: "Post Not Found" });
  } else if (err.message === "COMMENT_NOT_FOUND") {
    res.status(404).json({ message: "Comment Not Found" });
  } else if (err.message === "PAGE_NOT_FOUND") {
    res.status(404).json({ message: "Page Not Found" });
  } else if (err.code === "auth/weak-password") {
    res.status(400).json({ message: "Password is too weak" });
  } else if (err.code === "storage/unauthorized") {
    res.status(401).json({ message: "Unauthorized" });
  } else {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = errorHandler;
