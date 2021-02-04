/*
 * @Author: your name
 * @Date: 2020-09-17 14:21:09
 * @LastEditTime: 2020-09-17 15:06:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \github\node-login\pem.js
 */
const fs = require("fs");
const NodeRSA = require("node-rsa");
const crypto = require("crypto");
const key = new NodeRSA({ b: 2048 }); //生成2048位的密钥
const publicDer = key.exportKey("pkcs1-public-pem"); //公钥
const privateDer = key.exportKey("pkcs1-private-pem"); //私钥
console.log("公钥:", publicDer);
console.log("私钥:", privateDer);
const text = "Yu Guo";
//导入私钥
//key.importKey(privateDer, "pkcs1-private-pem");
// 加签并加密
const sign = key.sign(text, "base64", "utf8");
console.log("A 私钥加签:", sign);
const encrypted = key.encrypt(sign, "base64");
console.log("B 公钥加密:", encrypted);
// 解密并验签
const decrypted = key.decrypt(encrypted, "utf8");
console.log("C 私钥解密:", decrypted);
const verify = key.verify(text, decrypted, "utf8", "base64");
console.log("D 公钥验签:", verify);
// 加密
const crypto_encrypted = crypto
  .publicEncrypt(publicDer, Buffer.from(text))
  .toString("base64");
console.log("E 公钥加密:", crypto_encrypted);
// 解密
var crypto_decrypted = crypto
  .privateDecrypt(
    {
      key: privateDer,
      padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
    },
    Buffer.from(crypto_encrypted, "base64")
  )
  .toString("utf8");
console.log("F 私钥解密:", crypto_decrypted);
const decrypted2 = key.decrypt(crypto_encrypted, "utf8");
console.log("G 私钥解密:", decrypted2);

function generator() {
  fs.writeFile("./pem/public_key.pem", sign, (err) => {
    if (err) throw err;
    console.log("公钥已保存！");
  });
  fs.writeFile("./pem/private_key.pem", encrypted, (err) => {
    if (err) throw err;
    console.log("私钥已保存！");
  });
}
generator();
