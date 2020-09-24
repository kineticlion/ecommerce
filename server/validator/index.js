const { check, validationResult } = require("express-validator");

exports.userValidation = [
  check("name", "Name is required").notEmpty(),
  check("email", "Email must be between 3 to 32 characters")
    .matches(/.+\@.+\..+/)
    .withMessage("Email must contain @")
    .isLength({
      min: 4,
      max: 32,
    }),
  check("password", "Password is required.").notEmpty(),
  check("password")
    .isLength({ min: 6 })
    .withMessage("Password must contain at least 6 characters.")
    .matches(/\d/)
    .withMessage("Password must contain a number."),
];

exports.userSignupValidator = (req, res, next) => {
  const results = validationResult(req);
  if (!results.isEmpty()) {
    const firstError = results.error[0].msg;
    return res.status(400).json({ error: firstError });
  }
  next();
};
