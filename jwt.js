/*
 * @Author: your name
 * @Date: 2020-09-14 09:30:23
 * @LastEditTime: 2021-01-29 10:18:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \github\node-login\jwt.js
 */
// 引入模块依赖
const fs = require("fs");
const jwt = require("jsonwebtoken");

// 创建 token 类
// Token 数据
const payload = {
  name: "YuGuo",
  admin: true,
};
const secret = "STUDYJWT";

// 签发 Token
const token = jwt.sign(payload, secret, { expiresIn: 60 * 60 * 24 }); //expiresIn设置为24小时过期

// 输出签发的 Token
console.log("1222", token);

jwt.verify(token, "STUDYJWT", (error, decoded) => {
  if (error) {
    console.log(error.message);
    return;
  }
  console.log(decoded);
});
