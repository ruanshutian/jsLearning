<template>
 this is  level3:data = {{data}}
  <br>
<level2></level2>
</template>

<script>
import Level2 from "./level2.vue";
export default {
  name: "level3",
  components: {Level2},
  inject:[
    'data'
  ]
}
</script>

<style scoped>

</style>