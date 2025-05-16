const { isHttpError } = require("http-errors");

function errorHandler(error, req, res, next) {
  console.error(error);

  if (isHttpError(error)) {
    return res
      .status(error.status)
      .send({ error: error.name, message: error.message });
  }

  return res.status(500).send({ message: "Internal Server Error" });
}

module.exports = errorHandler;
