const mongoose = require("mongoose");

const countrySchema = new mongoose.Schema({
  name: { type: String, required: true },
  code: { type: String }, // e.g., "IN", "US"
});

module.exports = mongoose.model("Country", countrySchema);
