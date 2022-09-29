<template>

  <div>
    <p>left:count= {{count}}</p>
    <button @click="add">add left</button>

  </div>

</template>

<script>
import bus from './evenBus.js'
export default {
  name: "left",
  data(){
    return{
      count:0
    }
  },
  methods:{
    add(){
      this.count++;
      bus.emit("countChange",this.count);
    }
  }
}
</script>

<style scoped>

</style>