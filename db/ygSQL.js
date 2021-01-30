/*
 * @Author: your name
 * @Date: 2020-09-14 09:30:23
 * @LastEditTime: 2021-01-30 17:15:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \github\node-login\db\ygSQL.js
 */
module.exports = {
  user: {
    queryAllSQL: "SELECT * FROM user",
    addSQL:
      "INSERT INTO user(name, url, area, country,cipher) VALUES(?,?,?,?,?)",
    updSQL:
      "UPDATE user SET name = ?, url = ?, area = ?, country = ?,cipher =? WHERE id = ?",
    delSQL: "DELETE FROM user where id = ?",
  },
  login: {
    LoginSQL: "SELECT * FROM user WHERE name = ? AND cipher = ?",
  },
};
