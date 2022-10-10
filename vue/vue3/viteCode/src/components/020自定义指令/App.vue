<template>
  <div>
    <div>自定义指令</div>
    <Home></Home>
    <hr/>
    <input type="text" v-focus>
    <li >{{data}}</li>
    <button @click="data +=1">add</button>
    <hr/>
    <hr/>
    <h2 v-color="'red'">color </h2>
  </div>
</template>

<script>
import Home from "./Home.vue";
export default {
  name: "App",
  data(){
    return{
      data:1
    }
  },
  components: {Home}
}

</script>

<style scoped>

</style>