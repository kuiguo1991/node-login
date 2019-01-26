const mysql = require("mysql");
const ygSQL = require("../db/ygSQL");
const models = require("../db/db");
var connection = mysql.createConnection(models.mysql);
connection.connect();



const sqlStr = ygSQL.queryAllSQL;
const user = function(req, res){
    connection.query(sqlStr, (err, results) => {
        if (!err) {
            return res.json({
                code: 200,
                message: "success",
                result: results
                })
            }
          else{
            return res.json({
                code: 500,
                message: "error",
                })
            }
      });
}


const loginStr = ygSQL.LoginSQL;
const login = function(req, res){
    const param =  req.body; 
    const USERNAME = param.USERNAME;
    const PASSWORD = param.PASSWORD;
    const loginParams = [USERNAME, PASSWORD]
    connection.query(loginStr, loginParams,(err,results) => {
        if (!err) {
            if(results.length!=0){
                return res.json({
                    code: 200,
                    message: "登录成功",
                    isLogin: true               
                });
            }else{
                return res.json({
                    code: 400,
                    message: "账号或密码错误",
                    isLogin: false              
                });
            }
        }else{
            return res.json({
                code: 500,
                message: "服务器错误",
                isLogin: false               
            });
        }
    });
}

module.exports = {
    user:user,
    login:login
}