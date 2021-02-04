/*
 * @Author: your name
 * @Date: 2020-09-14 09:30:23
 * @LastEditTime: 2021-01-30 17:15:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \github\node-login\controllers\login.js
 */
const mysql = require("mysql");
const ygSQL = require("../db/ygSQL");
const models = require("../db/db");
var connection = mysql.createConnection(models.mysql);

connection.connect();
//查询用户信息
//登录
const loginStr = ygSQL.login.LoginSQL;
const login = function (req, res) {
  const param = req.body;
  const USERNAME = param.USERNAME;
  const PASSWORD = param.PASSWORD;
  const loginParams = [USERNAME, PASSWORD];
  connection.query(loginStr, loginParams, (err, results) => {
    if (!err) {
      if (results.length != 0) {
        return res.json({
          code: 200,
          message: "登录成功",
          isLogin: true,
        });
      } else {
        return res.json({
          code: 500,
          message: "账号或密码错误",
          isLogin: false,
        });
      }
    } else {
      return res.json({
        code: 500,
        message: "服务器错误",
        isLogin: false,
      });
    }
  });
};

module.exports = {
  login: login,
};
