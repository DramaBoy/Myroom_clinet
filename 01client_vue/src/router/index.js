import Vue from 'vue'
import Router from 'vue-router'
import UsercenterView from "@/views/UsercenterView";
import userList from '@/views/user/list'
import userChange from '@/views/user/change'
import productList from '@/views/product/list'
import productAdd from '@/views/product/add'
import LoginView from "@/views/LoginView";
import Knowmore from "@/views/Knowmore";
import Detail from "@/views/Detail";
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      name:'Hometop',
      component:()=> import('../views/HomePage/Hometop.vue')
  },
    {
      path: "/login",
      component: LoginView
    },
    {
      path: "/knowmore",
      component: Knowmore
    },
    {
      path: "/abroad",
      name: 'Abroadnav',
      component: () => import("../components/Abroadnav.vue"),
      children: [
        {
          path: '/abBrand',
          name: 'abBrand',
          component: () => import("../components/Abroad/abBrand.vue"),
        },
        {
          path: '/abroadindex',
          name: 'AbroadIndex',
          component: () => import("../components/Abroad/AbroadIndex.vue"),
        },
        {
          path: '/abHouse',
          name: 'abHouse',
          component: () => import("../components/Abroad/abHouse.vue")
        },
        {
          path: '/abLand',
          name: 'abLand',
          component: () => import("../components/Abroad/abLand.vue")
        },
        {
          path: '/abNews',
          name: 'abNews',
          component: () => import("../components/Abroad/abNews.vue")
        },
        {
          
          path: "/detail",
          component: Detail,
          component: () => import("@/views/Detail")
          
        }
      ]
    },
	{
      path: '/clientCenter',
      component: UsercenterView,
      icon1: "el-icon-goods",
      icon2: "el-icon-s-goods",
      isActive: true,
      name: '发布管理',
      children: [
        { path: '/clientCenter', component: productAdd, name: '发布房源' },
        { path: '/clientproductList', component: productList, name: '我的发布' }
      ]
    },
    {
      path: '/clientCenter',
      component: UsercenterView,
      icon1: "el-icon-user",
      icon2: "el-icon-user-solid",
      isActive: false,
      name: '个人中心',
      children: [
        { path: '/clientChange', component: userChange, name: '修改资料' },
        { path: '/clientList', component: userList, name: '我的收藏' }
      ]
    },
    {
      path: '/Navheader',
      name: '新房导航栏',
      component: () => import("../components/Navheader.vue"),
      children: [
        {
          path: '/newhouse',
          name: '新房首页',
          component: () => import("@/views/Newhouse.vue"),
        },
        {
          path: '/hotactive',
          name: '热门活动',
          component: () => import("@/views/HotActiveView.vue")
        },
        {
          path: "/hotinfo",
          name:'热门详情',
          component: () => import("@/views/HotInfo"),
        }
      ]
    },
    {
      path: "/comments",
      name:'评论页面',
      component:()=> import('../views/comments.vue')
    },
    {//楼讯路由模块
      path: '/navbarcom',
      name: 'NavBarcom',
      component: () => import("../components/lounews/NavBarcom.vue"),
      children: [
        {//主页子路由
          path: '/navbarcom',
          name: 'Barmain',
          component: () => import("../components/lounews/Barmain.vue"),
        },
        {// 导购子路由
          path: '/daogou',
          name: 'Daogou',
          component: () => import("../components/lounews/Daogou.vue")
        },
        {//热点新闻子路由
          path: '/hotnews',
          name: 'HotNews',
          component: () => import("../components/lounews/HotNews.vue")
        },
        {//特别主题子路由
          path: '/specialstopic',
          name: 'SpecialsTopic',
          component: () => import("../components/lounews/SpecialsTopic.vue")
        }
      ]
    }
  ]
})
