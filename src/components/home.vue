<template>
  <div id="home">
    <mt-swipe :auto="4000">
      <mt-swipe-item>
        <img src="../common/img/james1.jpg" alt="" width="100%" height="100%" @touchmove.prevent>
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../common/img/james2.jpg" alt="" width="100%" height="100%" @touchmove.prevent>
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../common/img/james3.jpg" alt="" width="100%" height="100%" @touchmove.prevent>
      </mt-swipe-item>
    </mt-swipe>
    <mt-button type="primary" size="normal" class="login" @click="handleClick">登陆</mt-button>
    <mt-button type="primary" size="normal" class="reg">注册</mt-button>
  </div>
</template>
<script>
import { Swipe, SwipeItem, Button } from 'mint-ui'
import Vue from 'vue'
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Button.name, Button)
export default {
  data () {
    return {}
  },
  methods: {
    handleClick () {
      this.$router.push('/login')
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
    #home {
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    margin: 0;
    padding: 0;
    }
    .login{
    width: 50%;
    position: absolute;
    left: 0;
    bottom: 0%;
    }
    .reg{
      width: 50%;
    position: absolute;
    right: 0;
    bottom: 0;
    }
</style>
