<template>

  <br>
  this is level1:data = {{data}}

</template>

<script>
export default {
  name: "level1",
  data(){
    return{
      dataTest:1
    }
  },
  inject:[
    'data'
  ]
}
</script>

<style scoped>

</style>