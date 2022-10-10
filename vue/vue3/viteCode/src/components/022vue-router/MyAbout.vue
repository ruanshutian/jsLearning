<template>
  <div>
    <li>this is MyAbout1</li>
    <li>this is MyAbout1</li>
    <li>this is MyAbout1</li>
    <hr/>
    <router-link to="/about/tab1">tab1</router-link>
    <router-link to="/about/tab2">tab2</router-link>
    <hr/>
    <router-view></router-view>
<!--    <Tab1></Tab1>-->
<!--    <Tab2></Tab2>-->
  </div>
</template>

<script>
import Tab1 from "./Tab1.vue";
import Tab2 from "./Tab2.vue";
export default {
  name: "MyAbout",
  components: {Tab2, Tab1}
}
</script>

<style scoped>

</style>