<template>
  <div>
    <mt-header title="登陆"></mt-header>
    <mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
    <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
    <div class="sure" @click="sure()" >确定</div>
  </div>
</template>
<script>
import { Header, Field } from 'mint-ui'
import Vue from 'vue'
import { mapState } from 'vuex'
Vue.component(Header.name, Header)
Vue.component(Field.name, Field)
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  mounted() {
    // this.$store.dispatch('setuser')
  },
  computed: {
    ...mapState(['logininfo'])
  },
  methods: {
    sure () {
      this.$axios.post(process.env.API_ROOT + '/index/Login/checkLogin', this.$qs.stringify({
        username: this.username,
        password: this.password
      })).then((res) => {
        console.log(res)
        this.$store.dispatch('setuser', {
          username: this.username,
          password: this.password
        })
        console.log(this.logininfo)
      })
    }
  }
}
</script>
<style>
 html {
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    margin: 0;
    padding: 0;
    }
    body {
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    margin: 0;
    padding: 0;
    }
    .sure{
      width: 100%;
      height: 60px;
      background: skyblue;
      line-height: 60px;
      text-align: center;
      font-size:  36px;
      letter-spacing: 4px;
    }
</style>
