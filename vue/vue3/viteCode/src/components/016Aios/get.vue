<template>
get
  <button type="button" @click="getInfo">发起get请求</button>
</template>

<script>
export default {
  name: "get",
  methods:{
    async getInfo(){
       const {data:res} = await this.$http.get('/api/get',{
        params:{
          name:'ls',
          age:33
        }
      })
      console.log(res)
    }
  }
}
</script>

<style scoped>

</style>