const User = require("../models/User");

exports.updateUserById = async (_id, { file, body }) => {
  const update = { ...body };
  if (file?.filename) {
    update.image = file.filename;
  }
  const user = await User.findByIdAndUpdate(_id, update, { new: true });
  if (!user) {
    throw new Error("User not found");
  }
  return user;
};

exports.isUsernameAvailable = async (username) => {
  const exists = await User.exists({ username });
  return !!exists;
};
