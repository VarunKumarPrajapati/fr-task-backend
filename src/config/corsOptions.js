const createHttpError = require("http-errors");
const knownClients = ["localhost", process.env.CLIENT_URL];

const corsOptions = {
  origin: (origin, cb) => {
    if (!origin || knownClients.includes(origin)) {
      cb(null);
    } else {
      cb(createHttpError(403, "Origin not allowed by CORS"));
    }
  },
  credentials: true,
};

module.exports = corsOptions;
