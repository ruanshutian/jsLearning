<template>
<span>count = {{count}}</span>
  <button @click="add">
    add count
  </button>
</template>

<script>
export default {
  name: "Counter",
  data(){
    return{
      count:1
    }
  },
  methods:{
    add(){
      this.count++;
    },
    reset(){
      this.count=0;
    }
  }
}
</script>

<style scoped>

</style>