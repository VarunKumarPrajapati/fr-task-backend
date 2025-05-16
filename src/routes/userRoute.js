const router = require("express").Router();
const {
  updateUser,
  checkUsernameAvailability,
} = require("../controllers/user.controller");

const upload = require("../middleware/upload");

router.post("/:id", upload.single("file"), updateUser);
router.get("/check-username", checkUsernameAvailability);

module.exports = router;
