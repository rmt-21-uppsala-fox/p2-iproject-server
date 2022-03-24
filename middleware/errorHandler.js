const errorHandler = (err, req, res, next) => {
    let code = 500;
    let message = 'Internal Server Error';

    if (err.name === 'Bad Request') {
        code = 400;
        message = err.message;
    } else if (err.name === 'Unauthorized') {
        code = 401;
        message = err.message;
    } else if (err.name === 'Not Found') {
        code = 404;
        message = err.message;
    } else if (err.name === 'Forbidden') {
        code = 403;
        message = err.message;
    }
    res.status(code).json({ message });
};

module.exports = errorHandler;
