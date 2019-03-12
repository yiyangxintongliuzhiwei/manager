import Vue from 'vue'
import Router from 'vue-router'
const login = () => import('@/components/login.vue')
const home = () => import('@/components/home.vue')
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: home
    },
    {
      path: '/login',
      component: login
    }
  ]
})
