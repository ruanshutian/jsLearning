<template>


  <div>
<!--    <div class="app-container">hello demo</div>-->

    <my-header v-bind:title="title" :bgcolor="bgcolor" :color="color"></my-header>
    <hr class="hr-container">
    <div >
      <form>
        <select >
          <option v-for="(item) in list" v-model="color">{{item}}</option>
        </select>
      </form>
    </div>
    <input v-model="color">

  </div>

</template>

<script>
import MyHeader from "./MyHeader.vue";
export default {
  name: "App",
  components: {MyHeader},
  data(){
    return{
      title:'',
      bgcolor:"pink",
      color:'yellow',
      list:[
          'red','green','blue'
        // {id:1, brandname:'宝马', state:true, addtime:new Date()},
        // {id:2, brandname:'宝马2', state:true, addtime:new Date()},
        // {id:3, brandname:'宝马3', state:true, addtime:new Date()},
      ]
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