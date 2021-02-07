/*
 * @Author: your name
 * @Date: 2021-02-07 10:34:13
 * @LastEditTime: 2021-02-07 10:46:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \node-login\config\mysql.js
 */

const mysql = require("mysql");
const db = require("./db");
var pool = mysql.createPool({
  host: db.mysql.host,
  user: db.mysql.user,
  password: db.mysql.password,
  port: db.mysql.port,
  database: db.mysql.database,
});

let query = function (sql, values) {
  return new Promise((resolve, reject) => {
    pool.getConnection(function (err, connection) {
      if (err) {
        reject(err);
      } else {
        connection.query(sql, values, (err, data) => {
          if (err) {
            reject(err);
          } else {
            resolve(data);
          }
          connection.release();
        });
      }
    });
  });
};

let createTable = (sql) => {
  return query(sql, []);
};

module.exports = {
  query,
  createTable,
};
