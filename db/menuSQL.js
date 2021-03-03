/*
 * @Author: your name
 * @Date: 2021-03-02 15:35:30
 * @LastEditTime: 2021-03-03 09:51:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \node-login\db\menuSQL.js
 */
/*
 * @Author: your name
 * @Date: 2020-09-14 09:30:23
 * @LastEditTime: 2021-03-02 15:35:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \github\node-login\db\ygSQL.js
 */
const { query, createTable } = require("../config/mysql");
const menu = {
  yg_menus: `create table if not exists yg_menus(
      menu_id VARCHAR(255) NOT NULL COMMENT '菜单ID',
      menu_name VARCHAR(100) NOT NULL COMMENT '菜单名称',
      menu_url VARCHAR(100) NOT NULL COMMENT '菜单地址',
      parent_id VARCHAR(100) NOT NULL COMMENT '父级ID',
      menu_order VARCHAR(100) NOT NULL COMMENT '菜单顺序',
      menu_icon VARCHAR(100) NOT NULL COMMENT '菜单图标',
      menu_type VARCHAR(100) NOT NULL COMMENT '菜单类型',
      PRIMARY KEY ( menu_id )
    )`,
  querySQL: "SELECT * FROM yg_menus",
  addSQL:
    "insert into yg_menus set user_id = ?, menu_name = ?, menu_url = ?,parent_id = ?, menu_order = ?, menu_icon = ?, menu_type = ?",
  updSQL:
    "UPDATE yg_menus SET menu_name = ?, menu_url = ?, parent_id = ?, menu_order = ? , menu_icon = ?, menu_type = ? WHERE menu_id = ?",
  delSQL: "DELETE FROM yg_menus where user_id = ?",
};

createTable(menu.yg_menus);

let insertData = function (value) {
  let _sql = menu.addSQL;
  return query(_sql, value);
};
let queryData = function (value) {
  let _sql = menu.querySQL;
  return query(_sql, value);
};
let deleteData = function (value) {
  let _sql = menu.delSQL;
  return query(_sql, value);
};
let updateData = function (value) {
  let _sql = menu.updSQL;
  return query(_sql, value);
};
module.exports = {
  insertData,
  queryData,
  deleteData,
  updateData,
};
