<template>
  <br>
  <level3></level3>
  <br>
  <button @click="Add">add</button>

</template>

<script>
import Level3 from "./level3.vue";
import {computed} from "vue";

export default {
  name: "App",
  components: {Level3},
  data(){
    return{
      AppData:520
    }
  },
  provide(){
    return{
      // data:this.AppData
      data:computed(()=>this.AppData)
    }
  },
  methods:{
    Add(){
      this.AppData++;
    }
  }
}
</script>

<style scoped>

</style>