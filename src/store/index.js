import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
Vue.use(Vuex)

const state = {
  logininfo: {}
}

const store = new Vuex.Store({
  state,
  // 在组件中用this.$store.dispatch(第一个参数是mutations中的定义方法 第二个参数是值) 用来执行的是mutation中的方法
  actions,
  // 对state中的内容进行处理
  mutations,
  // 对logininfo进行过滤
  getters: {
  }
})
export default store
