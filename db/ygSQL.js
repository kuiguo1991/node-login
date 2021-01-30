/*
 * @Author: your name
 * @Date: 2020-09-14 09:30:23
 * @LastEditTime: 2021-01-30 11:20:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \github\node-login\db\ygSQL.js
 */
module.exports = {
  queryAllSQL: "SELECT * FROM user",
  LoginSQL: "SELECT * FROM user WHERE USERNAME = ? AND PASSWORD = ?",
  addSQL:
    "INSERT INTO websites(id, name, url, area, country) VALUES(0,?,?,?,?)",
  modSQL:
    "UPDATE websites SET name = ?, url = ?,area = ?, country = ? WHERE id = ?",
  delSQL: "DELETE FROM websites where id = ?",
};
