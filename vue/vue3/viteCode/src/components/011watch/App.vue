<template>


  <div>

    <my-watch></my-watch>

    <MyWatchImmediate></MyWatchImmediate>

<!--    <MyWatchDeep></MyWatchDeep>-->

    <MyWatchDeepOne></MyWatchDeepOne>

  </div>

</template>

<script>
import MyWatch from "./MyWatch.vue";
import MyWatchImmediate from "./MyWatchImmediate.vue";
import MyWatchDeep from "./MyWatchDeep.vue";
import MyWatchDeepOne from "./MyWatchDeepOne.vue";
export default {
  name: "App",
  components: {MyWatch ,MyWatchImmediate ,MyWatchDeep ,MyWatchDeepOne},
  data(){
    return{
      count:1
    }
  },
  methods:{
    add(){
      this.count++;
    }
  }
}
</script>

<style scoped>
.hr-container{
  margin-top: 50px;
}
.app-container{
  margin-top: 45px;
}

</style>