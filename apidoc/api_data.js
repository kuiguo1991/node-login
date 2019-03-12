define({ "api": [
  {
    "type": "post",
    "url": "/api/loginUsers/login",
    "title": "用户登录",
    "description": "<p>用户登录</p>",
    "name": "login",
    "group": "loginUsers",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "USERNAME",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "PASSWORD",
            "description": "<p>密码</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "filename": "routers/index.js",
    "groupTitle": "loginUsers"
  },
  {
    "type": "get",
    "url": "/api/loginUsers/user",
    "title": "用户数据",
    "description": "<p>获取用户数据</p>",
    "name": "user",
    "group": "loginUsers",
    "version": "1.0.0",
    "filename": "routers/index.js",
    "groupTitle": "loginUsers"
  }
] });
