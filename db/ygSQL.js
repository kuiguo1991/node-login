/*
 * @Author: your name
 * @Date: 2020-09-14 09:30:23
 * @LastEditTime: 2021-02-07 11:12:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \github\node-login\db\ygSQL.js
 */
const { query, createTable } = require("../config/mysql");
const user = {
  yg_users: `create table if not exists yg_users(
      user_id VARCHAR(255) NOT NULL COMMENT '用户ID',
      username VARCHAR(100) NOT NULL COMMENT '用户名',
      password VARCHAR(100) NOT NULL COMMENT '密码',
      avatar VARCHAR(100) NOT NULL COMMENT '头像',
      create_time VARCHAR(100) NOT NULL COMMENT '注册时间',
      login_status VARCHAR(100) NOT NULL COMMENT '登录状态',
      user_rule VARCHAR(100) NOT NULL COMMENT '用户角色',
      PRIMARY KEY ( user_id )
    );`,
  querySQL: "SELECT * FROM yg_users",
  addSQL:
    "insert into yg_users set user_id = ?, username = ?,password = ?,avatar = ?,create_time = ?, login_status = ?,user_rule = ?",
  updSQL:
    "UPDATE yg_users SET username = ?, password = ?, avatar = ?, login_status = ? ,user_rule = ? WHERE user_id = ?",
  delSQL: "DELETE FROM yg_users where user_id = ?",
};

createTable(user.yg_users);

let insertData = function (value) {
  let _sql = user.addSQL;
  return query(_sql, value);
};
let queryData = function (value) {
  let _sql = user.querySQL;
  return query(_sql, value);
};
let deleteData = function (value) {
  let _sql = user.delSQL;
  return query(_sql, value);
};
let updateData = function (value) {
  let _sql = user.updSQL;
  return query(_sql, value);
};
module.exports = {
  insertData,
  queryData,
  deleteData,
  updateData,
};
