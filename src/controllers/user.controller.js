const {
  updateUserById,
  isUsernameAvailable,
} = require("../services/userService");

exports.updateUser = async (req, res) => {
  const data = { file: req.file, body: req.body };
  await updateUserById(req.params.id, data);

  res.status(204).send();
};

exports.checkUsernameAvailability = async (req, res) => {
  const exists = await isUsernameAvailable(req.query.query);
  return res.send({ exists });
};
