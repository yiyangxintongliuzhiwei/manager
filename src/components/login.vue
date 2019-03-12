<template>
  <div>
    <mt-header title="登陆"></mt-header>
    <mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
    <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
    <div class="sure" @click="sure()">确定</div>
  </div>
</template>
<script>
import { Header, Field } from 'mint-ui'
import Vue from 'vue'
Vue.component(Header.name, Header)
Vue.component(Field.name, Field)
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    sure () {
      this.$axios.post('/api/manager/checklogin.php', this.$qs.stringify({
        name: this.username,
        pass: this.password
      })).then(res => {
        // console.log(res)
        alert(1)
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
