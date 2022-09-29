<template>

  <div>
      <p>right :num = {{num}}</p>
  </div>

</template>

<script>
import bus from './evenBus.js'
export default {
  name: "right",
  data(){
    return{
      num:0
    }
  }
  ,
  created() {
    bus.on('countChange',(count)=>{
      this.num = count;
    })
  }
}
</script>

<style scoped>

</style>