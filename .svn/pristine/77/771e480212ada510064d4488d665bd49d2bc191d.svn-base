/*
 * @Author: your name
 * @Date: 2020-07-28 16:27:41
 * @LastEditTime: 2020-08-24 01:07:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \github\element-ui-node\src\router\index.js
 */
import Vue from 'vue'
import Router from 'vue-router'


import Layout from '@/layout'

/* Layout */
Vue.use(Router);

export const initRouterMap = [
    {
        path: "/",
        component: Layout,
        redirect: '/Home',
        hidden: false,
        children: [
            {
              path: '/Home',
              component: () => import('@/page/Home/index'),
              name: 'Home',
              meta: { title: '系统首页', icon: 'home', affix: true }
            }
          ]
    },
    {
        path: "/page",
        component: Layout,
        redirect: '/Documentation',
        hidden: false,
        children: [
            {
              path: '/Documentation',
              component: () => import('@/page/Documentation/index'),
              name: 'Documentation',
              meta: { title: '数据信息', icon: 'home', affix: true }
            }
          ]
    },
    {
        path: "/page",
        component: Layout,
        meta: { title: '系统管理', icon: 'home', affix: true },
        hidden: false,
        children: [
            {
              path: '/System/User',
              component: () => import('@/page/System/User/index'),
              name: 'User',
              meta: { title: '用户管理', icon: 'home', affix: true }
            },
            {
                path: '/System/Menu',
                component: () => import('@/page/System/Menu/index'),
                name: 'Menu',
                meta: { title:'菜单管理', icon: 'home', affix: true }
            }
          ]
    },
    {
        path: "/login",
        hidden: true,
        component: resolve => require(["@/page/Login/index.vue"], resolve)
    },
    {
        path: "*",
        hidden: true,
        redirect: "/login"
    }
]




export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes:initRouterMap
})





