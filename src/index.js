const express = require("express");
const cors = require("cors");

const { NotFound } = require("http-errors");

const errorHandler = require("./middleware/error");
const corsOptions = require("./config/corsOptions");

require("dotenv").config();
require("express-async-errors");
require("./config/db");

const app = express();

app.use(cors(corsOptions));
app.use(express.json());

app.get("/", async (req, res) => {
  res.json({ message: "Hello from Express server!" });
});

app.use((req, res, next) => next(NotFound()));
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
