const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    image: { type: String, default: "" },
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    newPassword: { type: String, default: "" },
    currentPassword: { type: String, default: "" },
    profession: { type: String, default: "" },
    companyName: { type: String, default: "" },
    addressLine1: { type: String, default: "" },
    country: { type: String, default: "" },
    state: { type: String, default: "" },
    city: { type: String, default: "" },
    subscriptionPlan: { type: String, default: "" },
    newSletter: { type: String, default: "" },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
