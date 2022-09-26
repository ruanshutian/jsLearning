<!--<template>-->
<!--  <img alt="Vue logo" src="./assets/logo.png" />-->
<!--  <HelloWorld msg="Hello Vue 3.0 + Vite" />-->
<!--</template>-->

<!--<script>-->
<!--import HelloWorld from './components/HelloWorld.vue'-->

<!--export default {-->
<!--  name: 'App',-->
<!--  components: {-->
<!--    HelloWorld-->
<!--  }-->
<!--}-->
<!--</script>-->

<template>

  <h1>
    this is <i>vue</i> test<i>ddddddd</i>
  </h1>
  <h3>
    this is h3  {{username}}
  </h3>
  <button @click="addCount">
    {{count}}
  </button>

  <hr>
  <dic>-------------this is helloComponent ------------</dic>

  <my-HW></my-HW>
  <my-TC></my-TC>
  <Swiper></Swiper>

</template>

<script>
import Swiper from "./components/002private/swiper.vue";
export default {
  // 组件的名称
  name:"app",
  components: {Swiper},
  //组件的数据(data方法中return出去的对象，就是当前组件渲染期间需要用到的数据对象)
  data(){
    return{
      username:"aron",
      count:0
    }
  },
  // methords
  methods:{
    addCount(){
      this.count++;
    }
  }

}
</script>
<!--<style >-->
<!--h1{-->
<!--  color: #1eacda;-->
<!--}-->
<!--</style>-->
<!--<style lang="css">-->

<!--</style>-->
<!--<style lang="less">-->
<!--h1{-->
<!--  color:red;-->
<!--  li{-->
<!--    background-color: blue;-->
<!--  }-->
<!--}-->
<!--</style>-->