function errorHandler(error, req, res, next) {
    let status, message
    switch (error.name) {
        case "Error":
            status = 404;
            message = "Bad request"
            break;
        default:
            status = 500;
            message = "Internal Server Error"
            message = error.message;
            console.log(error);
            break;
    }
    res.status(status).json({
        message
    })
}
module.exports = errorHandler