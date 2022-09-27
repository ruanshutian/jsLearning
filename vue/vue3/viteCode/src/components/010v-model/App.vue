<template>


  <div>

    <h1>count = {{count}}</h1>
    <button @click="add" >count++</button>
   <Count :number="count"></Count>

    <br><br><br><br><br>
    <Count v-model:number="count"></Count>

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