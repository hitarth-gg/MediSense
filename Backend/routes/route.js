const express = require("express");
const router = express.Router();

const {login, signup, form, formpush, getAllForms} = require("../Controllers/Auth");
// const {auth, isFacilitator, isDoctor} = require("../middlewares/auth");

router.post("/login", login);
router.post("/signup", signup);
router.post("/form", form);
router.post("/formpush", formpush);
router.post("/getallforms", getAllForms);




module.exports = router;
