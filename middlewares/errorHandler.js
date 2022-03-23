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
  } else if (err.message === "FORBIDDEN") {
    res.status(403).json({ message: "FORBIDDEN" });
  } else if (err.message === "POST_NOT_FOUND") {
    res.status(404).json({ message: "Post Not Found" });
  } else if (err.message === "COMMENT_NOT_FOUND") {
    res.status(404).json({ message: "Comment Not Found" });
  } else if(err.message === "PAGE_NOT_FOUND"){
    res.status(404).json({message: "Page Not Found"})
  }else {
    res.json(err);
  }
};

module.exports = errorHandler;
