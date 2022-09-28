<template>
<div>
  <h1>test son to parents </h1>
  <p>num:{{x}}</p>
  <button @click="addX">add</button>
</div>
</template>

<script>
export default {
  name: "son",
  // props:[
  //     'num'
  // ],
  emits:['numChange'],
  data(){
    return{
      x:0,
    }
  },
  methods:{
    addX(){
      this.x++;
      this.$emit('numChange', this.x);
    }
  }
}
</script>

<style scoped>

</style>