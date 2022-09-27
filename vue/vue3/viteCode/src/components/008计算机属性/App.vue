<template>


  <div>

   <Count ></Count>

  </div>

</template>

<script>
import Count from "./Count.vue";
/**
 * 计算属性
 * 计算属性会缓存计算结果，只有依赖项发生变化的时候才会重新运算
 * 性能相对于方法要更好
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