function errorHandler(err, req, res, next) {
   let code = 500;
   let msg = 'Internal Server Error';

   res.status(code).send(msg);
}

module.exports = errorHandler;