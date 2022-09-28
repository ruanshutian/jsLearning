<template>

  <div>

    <h3>MyWatchDeepOne</h3>
    <input type="text" v-model="info.username">

  </div>

</template>

<script>
import axios from 'axios'
export default {
  name: "MyWatchDeepOne",
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
    'info.username':{
      // 2 handeler 属性是固定写法：当username变化时，调用hanlder
      async handler(newVal, oldVal){
        console.log(newVal)
        const {data:res} = await axios.get(`https://www.escook.cn/api/finduser/${newVal}`);
        console.log('MyWatchDeepOne',res)
      }
    }
  }
}
</script>

<style scoped>

</style>