const errorHandler = (err, req, res, next) => {
  // console.log(err);
  let Err;
  switch (err.name) {
    case `SequelizeValidationError`:
      Err = err.errors.map((el) => el.message);
      res.status(400).json({ msg: `Validation Error`, error: Err });
      break;
    case `SequelizeUniqueConstraintError`:
      Err = err.errors.map((el) => el.message);
      res.status(400).json({ msg: `Validation Error`, error: Err });
      break;
    case `Email is required`:
      res.status(400).json({ message: err.message });
      break;
    case `Password is required`:
      res.status(400).json({ message: err.message });
      break;
    case `Invalid Email/Password`:
      res.status(401).json({ message: err.message });
      break;
    case `access_token is required`:
      res.status(401).json({ message: err.message });
      break;
    case `Invalid access_token`:
      res.status(403).json({ message: err.message });
      break;
    default:
      res.status(500).json({ msg: `Internal Server Error` });
      break;
  }
};
module.exports = { errorHandler };
