<template>
  <div>
    <li> id = {{id}}</li>
    <li> $route.params.id = {{$route.params.id}}</li>
    <li>this is MyMovie </li>
    <li>this is MyMovie</li>
    <li>this is MyMovie</li>
    <button @click="goBack">back</button>
  </div>
</template>

<script>
export default {
  name: "MyMovie",
  props:[
      'id'
  ],
  methods:{
    goBack(){
        this.$router.go(-1);
    }
  }
}
</script>

<style scoped>

</style>