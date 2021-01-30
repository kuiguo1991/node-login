define({ "api": [
  {
    "type": "post",
    "url": "/api/system/login",
    "title": "用户登录",
    "description": "<p>用户登录</p>",
    "name": "login",
    "group": "Login",
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
    "groupTitle": "Login",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:5555/api/system/login"
      }
    ]
  },
  {
    "type": "post",
    "url": "/api/system/addUser",
    "title": "添加用户",
    "description": "<p>添加用户</p>",
    "name": "addUser",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>姓名</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "url",
            "description": "<p>地址</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "area",
            "description": "<p>区域</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "country",
            "description": "<p>国家</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "cipher",
            "description": "<p>密码</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "filename": "routers/index.js",
    "groupTitle": "Users",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:5555/api/system/addUser"
      }
    ]
  },
  {
    "type": "post",
    "url": "/api/system/delUser",
    "title": "删除用户",
    "description": "<p>删除用户</p>",
    "name": "delUser",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "version": "1.0.0",
    "filename": "routers/index.js",
    "groupTitle": "Users",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:5555/api/system/delUser"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/system/user",
    "title": "获取用户",
    "description": "<p>获取用户</p>",
    "name": "user",
    "group": "Users",
    "version": "1.0.0",
    "filename": "routers/index.js",
    "groupTitle": "Users",
    "sampleRequest": [
      {
        "url": "http://127.0.0.1:5555/api/system/user"
      }
    ]
  }
] });
