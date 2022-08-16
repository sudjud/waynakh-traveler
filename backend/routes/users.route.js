const { Router } = require("express");
const { userController } = require("../controllers/users.controller");
const router = Router();

router.get("/users", userController.getUser);
router.post("/register", userController.registerUsers);
router.post("/login", userController.login);

module.exports = router;
