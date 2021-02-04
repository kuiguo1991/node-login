<template>
    <div class="yBreadCrumb">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item v-for="(item, index) in this.$route.meta" :key="index">{{item}}</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>

<script>
    export default {
        name: "yBreadCrumb",
        data() {
            return {
                list: null
            }
        },
        watch: {
            $route() {
                console.log(this.$route);
            }
        },
        created(){
            this.getBreadcrumb()
        },
        methods:{
            getBreadcrumb() {
                let matched = this.$route.matched.filter(item => item.name!==null);
                const first = matched[1];
                if (first && (first.name !== '首页' || first.path !== '')) {
                    matched = [{ name: '首页', path: '/' }].concat(matched)
                }

                // console.log(matched);
                this.list = matched;
            }
        }
    }
</script>

<style scoped>
    .el-breadcrumb {
        line-height: 3;
    }
</style>
