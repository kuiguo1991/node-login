/*
 * @Author: 隗果 
 * @Date: 2020-09-03 22:56:53 
 * @Last Modified by:   隗果 
 * @Last Modified time: 2020-09-03 22:56:53 
 */


<template>
    <div class="login">
        <div class="login_content">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-position="left" label-width="0px" class="demo-ruleForm login-container">
                <h3 class="title">系统登录</h3>
                <el-form-item prop="account">
                    <el-input type="text" v-model="ruleForm.account" auto-complete="off" placeholder="账号"></el-input>
                </el-form-item>
                <el-form-item prop="checkPass">
                    <el-input type="password" v-model="ruleForm.checkPass"  auto-complete="off" placeholder="密码"></el-input>
                </el-form-item>
                <el-checkbox  checked class="remember" style="margin: 0 0 25px 0">记住密码</el-checkbox>
                <el-form-item style="width:100%;">
                    <el-button type="primary" style="width:100%;" :loading="loading" @click="handleSubmit" @keyup.enter="handleSubmit">登录</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script>
    export default {
        name:"Login",
        data(){
            return{
                loading: false,
                ruleForm: {
                    account: 'admin',
                    checkPass: '123456'
                },
                rules: {
                    account: [{
                        required: true,
                        message: '请输入账号',
                        trigger: 'blur'
                    },
                        //{ validator: validaePass }
                    ],
                    checkPass: [{
                        required: true,
                        message: '请输入密码',
                        trigger: 'blur'
                    },
                        //{ validator: validaePass2 }
                    ]
                },
                checked: true
            }
        },
        methods: {
            handleSubmit(ev) {
                var _this = this;
                _this.$refs.ruleForm.validate((valid) => {
                    if (valid) {
                        _this.logining = true;
                        var loginParams = {
                            USERNAME: this.ruleForm.account,
                            PASSWORD: this.ruleForm.checkPass
                        };
                        // this.$ajax.post('http://localhost:5551/api/LoginUser/Login',loginParams).then(res=>{
                        //         // console.log(res)
                        //         if(res.data.isLogin){
                        //             _this.logining = false;
                        //             sessionStorage.setItem('user', JSON.stringify(loginParams));
                        //             _this.$router.push({ path: '/' });
                        //         }else{
                        //             _this.logining = false;
                        //             _this.$alert('用户名或密码错误！', '提示信息', {
                        //                 confirmButtonText: '确定'
                        //             });
                        //         }
                        // })
                        if (loginParams.USERNAME === "admin" && loginParams.PASSWORD === "123456") {
                            _this.logining = false;
                            sessionStorage.setItem('user', JSON.stringify(loginParams));
                            _this.$router.push({ path: '/' });
                        } else {
                            _this.logining = false;
                            _this.$alert('用户名或密码错误！', '提示信息', {
                                confirmButtonText: '确定'
                            });
                        }
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            }
        }
    }
</script>
<style scoped>
    .login{
        width: 100%;
        height: 100%;
        position: relative;
        /* background-color: #5075b5; */
    }
    .login_content{
        position: absolute;
        left: 50%;
        width: 450px;
        height: 300px;
        -webkit-border-radius: 5px;
        border-radius: 5px;
        -moz-border-radius: 5px;
        background-clip: padding-box;
        margin-left: -225px;
        margin-top: 150px;
        padding: 35px  25px;
        background: #fff;
        border: 1px solid #eaeaea;
        box-shadow: 0 0 25px #cac6c6;
    }
    .title{
        text-align: center;
        margin-bottom: 10px;
    }
</style>