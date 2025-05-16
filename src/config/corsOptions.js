const allowedOrigins = ["http://localhost:5173", process.env.CLIENT_URL];

const corsOptions = {
  origin: (origin, cb) => {
    if (!origin || allowedOrigins.includes(origin)) cb(null, true);
    else cb(new Error("Block by CORS:" + origin));
  },
};

module.exports = corsOptions;
