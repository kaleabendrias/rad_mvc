const express = require("express");
const authController = require("../controllers/auth.controller");
const router = express.Router();

router.post("/signin", authController.signin);
router.post("/signup", authController.signup);
router.get("/checktoken", authController.checktoken);
router.get("/signout", authController.signout);

module.exports = router;
