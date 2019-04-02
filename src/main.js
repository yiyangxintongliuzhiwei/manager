// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible'
import MintUI from 'mint-ui'
import axios from 'axios'
import qs from 'qs'
import md5 from 'js-md5'
import store from './store'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)
Vue.prototype.$axios = axios
Vue.prototype.$qs = qs
Vue.prototype.$md5 = md5
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    next()
  } else {
    if (Object.keys(this.$store.state.logininfo) === '{}') {
      next({path: '/login'})
    }
  }
})
