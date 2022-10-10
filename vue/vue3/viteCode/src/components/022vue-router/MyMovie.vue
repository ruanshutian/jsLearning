<template>
  <div>
    <li> id = {{id}}</li>
    <li> $route.params.id = {{$route.params.id}}</li>
    <li>this is MyMovie </li>
    <li>this is MyMovie</li>
    <li>this is MyMovie</li>
  </div>
</template>

<script>
export default {
  name: "MyMovie",
  props:[
      'id'
  ]
}
</script>

<style scoped>

</style>