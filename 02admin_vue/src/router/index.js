import Vue from 'vue';
import Router from 'vue-router';
import LoginView from "@/views/LoginView"
import RegisterView from "@/views/RegisterView"

Vue.use(Router);

export default new Router({
    routes: [{
            path: '/',
            component: resolve => require(['../views/Home.vue'], resolve),
            // meta: { title: '自述文件' },
            children: [{
                    path: '/table',
                    component: resolve => require(['../views/BaseTable.vue'], resolve),
                    meta: {
                        title: '基础表格'
                    }
                },
                {
                    path: '/tabs',
                    component: resolve => require(['../views/Tabs.vue'], resolve),
                    meta: {
                        title: 'tab选项卡'
                    }
                },
                {
                    path: '/form',
                    component: resolve => require(['../views/HouseAdd.vue'], resolve),
                    meta: {
                        title: '表单添加信息'
                    }
                },
            ]
        },
        {
            path: '/login',
            component: resolve => require(['../views/Login.vue'], resolve)
        },
        {
            path: "/login1",
            component: LoginView
        },
        {
            path: "/register",
            component: RegisterView
        },
    ]
})