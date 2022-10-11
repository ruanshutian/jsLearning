<template>
  <div id="app">
    <el-button>默认按钮</el-button>
    <el-button @click="getInfo">发送 get请求axios</el-button>
    <el-button @click="getUser">get user </el-button>
    <el-button type="primary">主要按钮</el-button>
    <el-button type="success">成功按钮</el-button>
    <el-button type="info">信息按钮</el-button>
    <el-button type="warning">警告按钮</el-button>
    <el-button type="danger">危险按钮</el-button>
  </div>
</template>

<script>


export default {
  name: 'App',
  methods:{
    async getInfo(){
      const {data:res} = await this.$http.get("/api/get/",{params:{name:'zs',age:18}})
      console.log(res)
    },
    async getUser(){
      const {data:res} = await this.$http.get("/api/users/")
      console.log(res)
    }
  }
}
</script>

<style>

</style>
