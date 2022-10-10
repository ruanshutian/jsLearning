<template>

<div>

  <hr/>
  <component :is="comName"></component>
  <hr/>
  <a href="#/MyAbout">MyAbout</a>
  <hr/>
  <a href="#/MyMovie">MyMovie</a>
  <hr/>
  <a href="#/MyHome">MyHome</a>
  <hr/>

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
  created() {
    window.onhashchange=()=>{

      switch (location.hash){
        case '#/MyAbout':
          this.comName = 'MyAbout';
          break;
        case '#/MyHome':
          this.comName='MyHome';
          break;
        case '#/MyMovie':
          this.comName='MyMovie';
          break;
      }

    }
  }
}
</script>

<style scoped>

</style>