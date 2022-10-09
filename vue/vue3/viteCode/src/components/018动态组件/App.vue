<template>
  <div>
    <button class="home" @click="myComponent='MyHome'">my home</button>
    <button class="movie" @click="myComponent='MyMovie'">my movie</button>
    <component :is="myComponent"></component>
  </div>
</template>

<script>
import MyHome from "./MyHome.vue";
import MyMovie from "./MyMovie.vue";
export default {
  name: "App",
  components: {MyHome, MyMovie},
  data(){
    return{
      myComponent:"MyHome"
    }
  }
}
</script>

<style scoped>

</style>