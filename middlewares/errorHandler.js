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
    default:
      res.status(500).json({ msg: `Internal Server Error` });
      break;
  }
};
module.exports = { errorHandler };
