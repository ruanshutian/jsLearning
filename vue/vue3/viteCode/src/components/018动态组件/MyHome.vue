<template>
<div>this is my Home </div>
  <span>
    count = {{count}}
  </span>
  <button @click="addCount">addCount</button>
</template>

<script>
export default {
  name: "MyHome",
  data(){
    return{
      count:0
    }
  },
  methods:{
    addCount(){
      this.count++;
    }
  },
  created() {
    console.log("created")
  },
  unmounted() {
    console.log('unmounted');
  }
}
</script>

<style scoped>

</style>