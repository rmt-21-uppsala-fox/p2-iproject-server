const errorHandler = async (err, req, res, next) => {
  res.json(err.name);
};

module.exports = errorHandler;
