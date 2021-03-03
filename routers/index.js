/*
 * @Author: your name
 * @Date: 2020-09-14 09:30:23
 * @LastEditTime: 2021-02-07 18:40:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \github\node-login\routers\index.js
 */
const express = require("express");
const router = express.Router();
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
 * @apiParam {string} username姓名
 * @apiParam {string} password密码
 * @apiParam {string} avatar头像
 * @apiParam {string} login_status登录状态
 * @apiParam {string} user_rule 用户角色
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
 * @apiParam {string}} user_id用户ID
 * @apiParam {string} username用户名
 * @apiParam {string} password密码
 * @apiParam {string} avatar头像
 * @apiParam {string} login_status登录状态
 * @apiParam {string} user_rule 用户角色
 * @apiVersion 1.0.0
 */

router.post("/system/updUser", User.updUser);

module.exports = router;
