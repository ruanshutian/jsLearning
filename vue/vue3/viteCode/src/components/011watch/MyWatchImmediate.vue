<template>

  <div>

    <h3>MyWatchImmediate</h3>
    <input type="text" v-model="username">

  </div>

</template>

<script>
import axios from 'axios'
export default {
  name: "MyWatchImmediate",
  data(){
    return{
      username:'admin'
    }
  },
  watch:{
    // 1 监听username值的变化
    username:{
      // 2 handeler 属性是固定写法：当username变化时，调用hanlder
      async handler(newVal, oldVal){
        const {data:res} = await axios.get(`https://www.escook.cn/api/finduser/${newVal}`);
        console.log('MyWatchImmediate',res)
      },
      // 3 表示组件加载完毕后立即调用一次当前的watch侦听器
      immediate:true
    }
  }
}
</script>

<style scoped>

</style>