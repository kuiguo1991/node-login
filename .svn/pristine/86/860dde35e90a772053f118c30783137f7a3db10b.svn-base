<!--
 * @Author: your name
 * @Date: 2020-08-23 23:14:42
 * @LastEditTime: 2020-08-24 01:30:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \github\element-ui-node\src\layout\components\ySideBar.vue
-->

<template>
    <div class="ySideBar">
        <el-menu
         class="el-menu-vertical-demo"
        :default-active="this.$route.path"
         unique-opened
         router>
            <template v-for="item in routes" >
                <template v-if="!item.hidden">
                   <template v-if="!item.redirect">
                        <el-submenu :index="item.path" :key="item.path">
                            <template slot="title">
                                <i class="el-icon-location"></i>
                                <span>{{item.meta.title}}</span>
                            </template>
                            <el-menu-item v-for="subItem in item.children" :key="subItem.path" :index="subItem.path">
                                    {{ subItem.meta.title }}
                            </el-menu-item>
                        </el-submenu>
                   </template>
                   <template v-else>
                        <el-menu-item :index="item.children[0].path" :key="item.children[0].path">
                            <i class="el-icon-setting"></i>
                            <span slot="title">{{ item.children[0].meta.title }}</span>
                        </el-menu-item>
                   </template>

                </template>

            </template>

        </el-menu>

    </div>
</template>
<script>
    import { initRouterMap }  from '@/router/index'
    export default {
        data() {
            return {
            }
        },
        created() {
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key);
            },
            handleClose(key, keyPath) {
                console.log(key);
            }
        },
        computed: {
            routes() {
                return initRouterMap
            }
        }

    }
</script>
<style scoped>
    .ySideBar{
        position: absolute;
        top: 70px;
        left: 0;
        bottom: 0;
        width: 250px;
    }
    .iconItem{
        padding-left: 10px;
    }
</style>
