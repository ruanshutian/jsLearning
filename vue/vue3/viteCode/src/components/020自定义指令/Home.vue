<template>
<div>
  <input type="text" v-focus>
</div>
  <div >
    <li >{{count}}</li>
    <button @click="addCount" >addCuunt</button>
    <h1 v-color="'green'">color </h1>
  </div>
</template>

<script>
export default {
  name: "Home",
  data(){
    return{
      count:0
    }
  },
  methods:{
    addCount(){
      this.count++;
    }
  },
  directives:{
    //自定义一个私有指令
    focus:{
      //当被绑定元素插入到DOM中时，自动触发mounted函数
      mounted(el) {
        console.log("mounted")
        el.focus()
      },
      updated(el){
        console.log("updated el")
        el.focus()
      }
    },
    color:{
      mounted(el,color) {
        el.style.color = color.value;
        // el.backgroundColor =color;
      }
    }
  }
}
</script>

<style scoped>

</style>