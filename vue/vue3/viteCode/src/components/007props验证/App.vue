<template>


  <div>

   <Count :I="I" :prop-q="propQ" type="success"></Count>

    <input v-model="I">
  </div>

</template>

<script>
import Count from "./Count.vue";
/**
 *
 * props验证
 * -------->通过对象来指定类型
 *
 *
 *
 *
 */
export default {
  name: "App",
  components: {Count},
  data(){
    return{
      title:'',
      I:true,
      propQ:520
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