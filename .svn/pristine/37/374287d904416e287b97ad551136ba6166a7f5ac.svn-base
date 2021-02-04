/*
 * @Author: your name
 * @Date: 2020-09-14 09:30:23
 * @LastEditTime: 2021-01-30 17:38:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \github\node-login\routers\index.js
 */
const express = require("express");
const router = express.Router();
const Login = require("../controllers/login");
const User = require("../controllers/user");

/**
 * @api {get} /api/system/user 获取用户
 * @apiDescription 获取用户
 * @apiName user
 * @apiGroup Users
 * @apiVersion 1.0.0
 */

router.get("/system/user", User.user);

/**
 * @api {post} /api/system/addUser 添加用户
 * @apiDescription 添加用户
 * @apiName addUser
 * @apiGroup Users
 * @apiParam {string} name姓名
 * @apiParam {string} url地址
 * @apiParam {string} area区域
 * @apiParam {string} country国家
 * @apiParam {string} cipher密码
 * @apiVersion 1.0.0
 */

router.post("/system/addUser", User.addUser);

/**
 * @api {post} /api/system/delUser 删除用户
 * @apiDescription 删除用户
 * @apiName delUser
 * @apiGroup Users
 * @apiParam {number} id
 * @apiVersion 1.0.0
 */

router.post("/system/delUser", User.delUser);

/**
 * @api {post} /api/system/updUser 更新用户
 * @apiDescription 更新用户
 * @apiName updUser
 * @apiGroup Users
 * @apiParam {number} id
 * @apiParam {string} name姓名
 * @apiParam {string} url地址
 * @apiParam {string} area区域
 * @apiParam {string} country国家
 * @apiParam {string} cipher密码
 * @apiVersion 1.0.0
 */

router.post("/system/updUser", User.updUser);

/**
 * @api {post} /api/system/login 用户登录
 * @apiDescription 用户登录
 * @apiName login
 * @apiGroup Login
 * @apiParam {string} USERNAME 用户名
 * @apiParam {string} PASSWORD 密码
 * @apiVersion 1.0.0
 */
router.post("/system/login", Login.login);

module.exports = router;
