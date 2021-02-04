<!--
 * @Author: your name
 * @Date: 2020-08-23 23:14:42
 * @LastEditTime: 2020-08-23 23:15:35
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \github\element-ui-node\src\layout\components\yHeader.vue
-->

<template>
    <div class="yHeader">
        <div class="h_logo">{{homeName}}</div>
        <div class="h_admin">
            <el-dropdown placement="bottom" @command="handleCommand">
                <span class="el-dropdown-link">{{userName}}</span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="关于作者">
                        <a href="http://yuguo1991.com/about/" target="_blank">关于作者</a>
                    </el-dropdown-item>
                    <el-dropdown-item command="项目仓库">
                        <a href="https://github.com/kuiguo1991/element-ui-node" target="_blank">项目仓库</a>
                    </el-dropdown-item>
                    <el-dropdown-item command="loginout" divided >退出登陆</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                userName:"admin",
                homeName:"后台管理系统"
            }
        },
        methods: {
            handleCommand(command) {
                if(command==="loginout"){
                    this.logoutFun()
                }
            },

            //退出登录
            logoutFun() {
                var _this = this;
                this.$confirm('确认退出吗?', '提示', {
                    type: 'warning'
                }).then(() => {
                    sessionStorage.removeItem('user');
                    _this.$router.push('/Login');
                }).catch(() => {
                    console.log("错误！")
                });
        }}
    }
</script>
<style scoped>
    .yHeader{
        position: absolute;
        width: 100%;
        top: 0;
        height: 70px;
        background-color: #242f42;
    }
    .h_logo{
        width: 30%;
        height: 70px;
        color: #ffffff;
        padding:0 50px;
        line-height: 70px;
        float: left;
    }
    .h_admin{
        width: 70%;
        height: 70px;
        float: left;
        text-align: right;
    }
    .el-dropdown{
        height: 30px;
        margin: 20px 30px;
    }
    .el-dropdown span{
        height: 30px;
        line-height: 30px;
    }
    .el-dropdown-link{
        color: #fff;
        cursor: pointer;
    }
</style>
