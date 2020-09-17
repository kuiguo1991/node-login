/*
 * @Author: your name
 * @Date: 2020-09-14 09:30:23
 * @LastEditTime: 2020-09-17 15:37:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \github\node-login\jwt.js
 */
// 引入模块依赖
const path = require("path");
const fs = require("fs");
const jwt = require("jsonwebtoken");

const NodeRSA = require("node-rsa");
const crypto = require("crypto");
const key = new NodeRSA({ b: 2048 }); //生成2048位的密钥
const publicDer = key.exportKey("pkcs1-public-pem"); //公钥
const privateDer = key.exportKey("pkcs1-private-pem"); //私钥
// // 创建 token 类
// class Jwt {
//   constructor(data) {
//     this.data = data;
//   }

//   //生成token
//   generateToken() {
//     let data = this.data;
//     let created = Math.floor(Date.now() / 1000);
//     let cert = fs.readFileSync(path.join(__dirname, "./pem/private_key.pem")); //私钥 可以自己生成
//     let token = jwt.sign(
//       {
//         data,
//         exp: created + 60 * 30,
//       },
//       cert,
//       { algorithm: "RS256" }
//     );
//     return token;
//   }

//   // 校验token
//   verifyToken() {
//     let token = this.data;
//     let cert = fs.readFileSync(path.join(__dirname, "./pem/public_key.pem"));
//     let res;
//     try {
//       let result = jwt.verify(token, cert, { algorithms: ["RS256"] }) || {};
//       let { exp = 0 } = result,
//         current = Math.floor(Date.now() / 1000);
//       if (current <= exp) {
//         res = result.data || {};
//       }
//     } catch (e) {
//       res = "err";
//     }
//     return res;
//   }
// };

function generateToken() {
  let data = {
    name: "yuguo",
  };
  let created = Math.floor(Date.now() / 1000);
  let token = jwt.sign(
    {
      data,
      exp: created + 60 * 30,
    },
    privateDer,
    { algorithm: "RS256" }
  );
  return token;
}

function verifyToken() {
  let data = {
    name: "yuguo",
  };
  let res;
  try {
    let result = jwt.verify(data, publicDer, { algorithms: ["RS256"] }) || {};
    console.log(result);
    let { exp = 0 } = result,
      current = Math.floor(Date.now() / 1000);
    if (current <= exp) {
      res = result.data || {};
    }
  } catch (e) {
    res = "err";
  }
  return res;
}

// module.exports = Jwt;

// console.log(generateToken());
console.log(verifyToken());
