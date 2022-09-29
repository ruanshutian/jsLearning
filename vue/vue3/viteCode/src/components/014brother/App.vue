<template>

  <div>

    <left></left>

    <right></right>

  </div>

</template>

<script>
/**
 *
 * npm install mitt -S 
 *
 */
import Left from "./left.vue";
import Right from "./right.vue";
export default {
  name: "App",
  components: {Right, Left}
}
</script>

<style scoped>

</style>