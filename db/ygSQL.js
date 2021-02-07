/*
 * @Author: your name
 * @Date: 2020-09-14 09:30:23
 * @LastEditTime: 2021-02-07 10:02:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \github\node-login\db\ygSQL.js
 */
module.exports = {
  user: {
    queryAllSQL: "SELECT * FROM yg_users",
    addSQL:
      "INSERT INTO yg_users(user_id, username, password, avatar, create_time, login_status,user_rule) VALUES(0,?,?,?,?,?)",
    updSQL:
      "UPDATE yg_users SET username = ?, password = ?, avatar = ?, login_status = ? ,user_rule = ? WHERE user_id = ?",
    delSQL: "DELETE FROM yg_users where user_id = ?",
  },
};
