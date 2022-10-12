<template>

  <div>
    UserList组件
  </div>

</template>

<script>
export default {
  name: "UserList",
  data(){
    return{
      userList:[]
    }
  },
  created() {
    this.getUserList()
  },
  methods:{
    async getUserList(){
      const {data:res} = await this.$http.get('/api/users');
      // console.log(res)
      if(res.status !==0 )return console.log("用户列表数据获取失败");
      this.userList = res.data;
      console.log(this.userList)
    }
  }
}
</script>

<style scoped lang="less">

</style>