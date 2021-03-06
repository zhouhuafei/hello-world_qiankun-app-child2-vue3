import { RouteRecordRaw } from 'vue-router'
import Home from '@/views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
  },
  {
    // 匹配所有路径
    // vue2使用*
    // vue3使用/:pathMatch(.*)*或/:pathMatch(.*)或/:catchAll(.*)
    path: '/:pathMatch(.*)*',
    name: '404',
    meta: { title: '404', hidden: true },
    component: () => import(/* webpackChunkName: "404" */ '@/views/404/index.vue')
  }
]

export default routes
