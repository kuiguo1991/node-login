/*
 * @Author: your name
 * @Date: 2021-01-30 17:12:26
 * @LastEditTime: 2021-01-30 17:37:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \github\node-login\controllers\user.js
 */

const mysql = require("mysql");
const ygSQL = require("../db/ygSQL");
const models = require("../db/db");
var connection = mysql.createConnection(models.mysql);

connection.connect();
//查询用户信息
const sqlStr = ygSQL.user.queryAllSQL;
const user = function (req, res) {
  connection.query(sqlStr, (err, results) => {
    if (err) {
      return res.json({
        code: 500,
        success: false,
      });
    }
    return res.json({
      code: 200,
      success: true,
      data: results,
    });
  });
};
//新增用户信息
const addSQL = ygSQL.user.addSQL;
const addUser = function (req, res) {
  const param = req.body;
  const name = param.name;
  const url = param.url;
  const area = param.area;
  const country = param.country;
  const cipher = param.cipher;
  const addParams = [name, url, area, country, cipher];
  connection.query(addSQL, addParams, (err, results) => {
    if (err) {
      return res.json({
        code: 500,
        success: false,
      });
    }
    return res.json({
      code: 200,
      success: true,
      message: "添加成功",
    });
  });
};
//删除用户信息
const delSQL = ygSQL.user.delSQL;
const delUser = function (req, res) {
  const param = req.body;
  const delParams = {
    id: param.id,
  };
  connection.query(delSQL, delParams, (err, results) => {
    if (err) {
      return res.json({
        code: 500,
        success: false,
      });
    }
    return res.json({
      code: 200,
      success: true,
      message: "删除成功",
    });
  });
};

//更新用户信息
const updSQL = ygSQL.user.updSQL;
const updUser = function (req, res) {
  const param = req.body;
  const id = param.id;
  const name = param.name;
  const url = param.url;
  const area = param.area;
  const country = param.country;
  const cipher = param.cipher;
  const updParams = [name, url, area, country, cipher,id];
  connection.query(updSQL, updParams, (err, results) => {
    if (err) {
      return res.json({
        code: 500,
        success: false,
      });
    }
    return res.json({
      code: 200,
      success: true,
      message: "更新成功",
    });
  });
};

module.exports = {
  user: user,
  addUser: addUser,
  delUser: delUser,
  updUser: updUser,
};
