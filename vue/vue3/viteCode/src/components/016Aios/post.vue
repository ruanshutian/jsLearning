<template>
post
  <button type="button" @click="postInfo">发起post请求</button>
</template>

<script>
export default {
  name: "post",
  methods:{
    async postInfo(){
      const {data:res} = await this.$http.post('api/post',{name:'zs',age:20})
      console.log(res)
    }
  }
}
</script>

<style scoped>

</style>