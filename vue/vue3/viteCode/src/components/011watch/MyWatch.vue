<template>

  <div>

    <h3>MyWatch</h3>
    <input type="text" v-model="username">

  </div>

</template>

<script>
import axios from 'axios'
export default {
  name: "MyWatch",
  data(){
    return{
      username:''
    }
  },
  watch:{
    // username(newVal, oldVal){
    //   console.log(newVal, oldVal);
    //   const res = axios.get(`https://www.escook.cn/api/finduser/${newVal}`);
    //   console.log(res)
    // }
    async username(newVal, oldVal){
      console.log(newVal, oldVal);
      const {data:res} = await axios.get(`https://www.escook.cn/api/finduser/${newVal}`);
      console.log('MyWatch',res)
    }
  }
}
</script>

<style scoped>

</style>