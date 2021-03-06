import Vue from 'vue'
import VueRouter from 'vue-router'
import MainLayout from '../layouts/MainLayout.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: MainLayout
  },
  {
    path: '/about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '*',
    component: () => import('../views/Error404.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
