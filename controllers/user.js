/*
 * @Author: your name
 * @Date: 2021-01-30 17:12:26
 * @LastEditTime: 2021-02-07 18:44:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \github\node-login\controllers\user.js
 */

const mysql = require("mysql");
const { v4: uuidv4 } = require("uuid");
const dayjs = require("dayjs");
const {
  insertData,
  queryData,
  deleteData,
  updateData,
} = require("../db/ygSQL");
//查询用户信息
// const sqlStr = ygSQL.user.queryAllSQL;
const user = function (req, res) {
  queryData()
    .then((results) => {
      return res.json({
        code: 200,
        success: true,
        data: results,
      });
    })
    .catch((err) => {
      return res.json({
        code: 500,
        success: false,
      });
    });
};
//新增用户信息
const addUser = function (req, res) {
  const param = req.body;
  const user_id = uuidv4();
  const username = param.username || "游客";
  const password = param.password || "123456";
  const avatar = param.avatar || "头像";
  const create_time = dayjs().format("YYYY-MM-DD HH:mm:ss");
  const login_status = param.login_status || "0";
  const user_rule = param.user_rule || "1";
  const addParams = [
    user_id,
    username,
    password,
    avatar,
    create_time,
    login_status,
    user_rule,
  ];
  insertData(addParams)
    .then((results) => {
      return res.json({
        code: 200,
        success: true,
        message: "添加成功",
      });
    })
    .catch((err) => {
      return res.json({
        code: 500,
        success: false,
      });
    });
};


//删除用户信息
const delUser = function (req, res) {
  const param = req.body;
  const delParams = [param.user_id];
  deleteData(delParams)
    .then((results) => {
      return res.json({
        code: 200,
        success: true,
        message: "删除成功",
      });
    })
    .catch((err) => {
      return res.json({
        code: 500,
        success: false,
      });
    });
};

//更新用户信息
const updUser = function (req, res) {
  const param = req.body;
  const user_id = param.user_id;
  const username = param.username;
  const password = param.password;
  const avatar = param.avatar;
  const login_status = param.login_status;
  const user_rule = param.user_rule;
  const updParams = [
    username,
    password,
    avatar,
    login_status,
    user_rule,
    user_id,
  ];
  updateData(updParams)
    .then((results) => {
      return res.json({
        code: 200,
        success: true,
        message: "更新成功",
      });
    })
    .catch((err) => {
      return res.json({
        code: 500,
        success: false,
      });
    });
};

module.exports = {
  user,
  addUser,
  delUser,
  updUser,
};
