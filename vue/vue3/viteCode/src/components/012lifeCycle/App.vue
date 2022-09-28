<template>

  <life-cycle v-if="flag"></life-cycle>
  <br><br>
  <button @click="flag = !flag">change flag</button>


</template>

<script>
import LifeCycle from "./LifeCycle.vue";
export default {
  name: "App",
  components: {LifeCycle},
  data(){
    return{
      flag:true
    }
  },
}
</script>

<style scoped>

</style>