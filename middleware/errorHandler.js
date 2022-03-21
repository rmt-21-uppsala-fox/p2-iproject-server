function errorHandler(err, req, res, next) {
   let code = 500;
   let msg = 'Internal Server Error';

   if(err.name === 'SequelizeValidationError' || err.name === 'SequelizeUniqueConstraintError') {
      code = 400;
      msg = err.errors[0].message;
   } else if(err.name === 'SequelizeForeignKeyConstraintError') {
      code = 400;
      msg = err.errors[0].message;
   } else if(err.name === "JsonWebTokenError") {
      code = 401;
      msg = "Invalid token";
   } else if (err.message === "Invalid token") {
      code = 401;
      msg = "Invalid token";
   } else if (err.message === "Data not found") {
      code = 404;
      msg = "Data not found";
   }
   res.status(code).send(msg);
}

module.exports = errorHandler;