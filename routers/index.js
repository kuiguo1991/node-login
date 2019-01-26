const express = require("express");
const router = express.Router();

const loginUsers = require("../controllers/login")

router.get("/loginUsers/user",loginUsers.user)

router.post("/loginUsers/login",loginUsers.login)

module.exports = router;