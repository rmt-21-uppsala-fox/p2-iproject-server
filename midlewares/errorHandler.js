const errorHandler = (err, req, res, next) => {
	let code = 500;
	let message = "Internal Server Error";
	switch (err.name) {
		case "Unauthorized":
			code = 401;
			message = err.name;
			break;

		default:
			break;
	}
	res.status(code).json({ message });
};

module.exports = errorHandler;
