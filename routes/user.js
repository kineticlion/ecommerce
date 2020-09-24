const express = require("express");
const router = express.Router();

const { signup } = require("../controllers/user");
const { userSignupValidator, userValidation } = require("../validator");

router.post("/signup", userValidation, userSignupValidator, signup);

module.exports = router;
