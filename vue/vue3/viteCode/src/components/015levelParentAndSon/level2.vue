<template>
  this is  level2:data = {{data}}
  <br>
<level1></level1>
</template>

<script>
import Level1 from "./level1.vue";
export default {
  name: "level2",
  components: {Level1},
  inject:[
      'data'
  ]
}
</script>

<style scoped>

</style>