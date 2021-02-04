/*
 * @Author: your name
 * @Date: 2020-09-14 09:30:23
 * @LastEditTime: 2021-01-30 15:22:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \github\node-login\app.js
 */
const express = require("express");
const app = express();

const LoginUsersRouter = require("./routers/index");
const bodyParser = require("body-parser");
const PORT = 5555;
app.all("*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Content-Length, Authorization, Accept, X-Requested-With"
  );
  res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS");
  res.header("Content-Type", "application/json; charset=utf-8");
  if (req.method === "OPTIONS") {
    res.sendStatus(200);
  } else {
    next();
  }
});
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api", LoginUsersRouter);
app.listen(PORT, () => {
  console.log("server is running at http://127.0.0.1:" + PORT); //192.168.1.114换成你的ip,本机ip查询用cmd=>ipconfig
});
