const express = require("express");
const router = express.Router();

const loginUsers = require("../controllers/login")


/**
* @api {get} /api/loginUsers/user 用户数据
* @apiDescription 获取用户数据
* @apiName user
* @apiGroup loginUsers
* @apiVersion 1.0.0
*/


router.get("/loginUsers/user",loginUsers.user)


/**
* @api {post} /api/loginUsers/login 用户登录
* @apiDescription 用户登录
* @apiName login
* @apiGroup loginUsers
* @apiParam {string} USERNAME 用户名
* @apiParam {string} PASSWORD 密码
* @apiVersion 1.0.0
*/
router.post("/loginUsers/login",loginUsers.login)

module.exports = router;