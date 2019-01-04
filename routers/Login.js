const express = require("express");
const router = express.Router();
const mysql = require("mysql");
const ygSQL = require("../db/ygSQL");
const models = require("../db/db");
var connection = mysql.createConnection(models.mysql);
connection.connect();

//查询
const sqlStr = ygSQL.queryAllSQL;
router.get("/", function (req, res) {
    connection.query(sqlStr, (err, results) => {
      if (err) {
            return res.json({
                    code: 500,
                    message: "error",
                });
              }
        else{
              res.json({
                    code: 200,
                    message: "success",
                    result: results
              });
            }
    });
})

//用户登录
const loginStr = ygSQL.LoginSQL;
//const addsqlparams = [param.name, param.url, param.alexa, param.country];
// const addsqlparams = ['百度', 'https://www.baidu.com', '20','China'];
router.post("/Login", function (req, res) {
    const param = req.query || req.params; 
    const USERNAME = param.USERNAME;
    const PASSWORD = param.PASSWORD;
    const loginParams = [USERNAME, PASSWORD]
    connection.query(loginStr, loginParams,(err,results) => {
        if (!err) {
        return res.json({
            code: 200,
            message: "登录成功",
            isLogin: results
        });
        }
    });
})


module.exports = router;