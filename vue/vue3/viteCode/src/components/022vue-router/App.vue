<template>

<div>

  <hr/>
  <h1>vue-router 基本使用</h1>
  <router-link to="/home">首页</router-link>
  <router-link to="/movie/1">电影1</router-link>
  <router-link to="/movie/2">电影2</router-link>
  <router-link to="/movie/3">电影3</router-link>
  <router-link to="/about">关于</router-link>
  <hr/>
  <router-view>路由占位符</router-view>
  <router-view></router-view>

</div>

</template>

<script>
import MyHome from "./MyHome.vue";
import MyAbout from "./MyAbout.vue";
import MyMovie from "./MyMovie.vue";
export default {
  name: "App",
  data(){
    return{
      comName:'MyHome'
    }
  },
  components: {MyMovie, MyAbout, MyHome},
  // created() {
  //   window.onhashchange=()=>{
  //
  //     switch (location.hash){
  //       case '#/MyAbout':
  //         this.comName = 'MyAbout';
  //         break;
  //       case '#/MyHome':
  //         this.comName='MyHome';
  //         break;
  //       case '#/MyMovie':
  //         this.comName='MyMovie';
  //         break;
  //     }
  //
  //   }
  // }
}
</script>

<style scoped>

.router-link-active{
  background-color: red;

}
.router-active{
  background-color: blue;
}

</style>