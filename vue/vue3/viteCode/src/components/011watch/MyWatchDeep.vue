<template>

  <div>

    <h3>MyWatchDeep</h3>
    <input type="text" v-model="info.username">

  </div>

</template>

<script>
import axios from 'axios'
export default {
  name: "MyWatchDeep",
  data(){
    return{
      username:'admin',
      info:{
        username: 'zs',
        age:20
      }
    }
  },
  watch:{
    // 1 监听username值的变化
    info:{
      // 2 handeler 属性是固定写法：当username变化时，调用hanlder
      async handler(newVal, oldVal){
        const {data:res} = await axios.get(`https://www.escook.cn/api/finduser/${newVal.username}`);
        console.log('MyWatchDeep',res)
      },
      // 3 表示组件加载完毕后立即调用一次当前的watch侦听器
      immediate:true,
      deep:true,//监听对象所有属性
    }
  }
}
</script>

<style scoped>

</style>