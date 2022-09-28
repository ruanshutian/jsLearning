<template>
<div>
  <h1>test son to parents </h1>
  <p>num:{{count}}</p>
  <button @click="addX">add</button>
</div>
</template>

<script>
export default {
  name: "son",
  props:[
      'count'
  ],
  emits:['update:count'],
  data(){
    return{
      // count:0,
    }
  },
  methods:{
    addX(){
      // this.count++;
      this.$emit('update:count', this.count + 1);
    }
  }
}
</script>

<style scoped>

</style>