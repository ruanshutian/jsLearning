<template>
<div>
  <h1>{{count}}</h1>
  <button @click="count++">count click</button>
</div>
</template>

<script>
export default {
  name: "LifeCycle",
  data(){
    return{
      flag:true,
      count:0
    }
  },
  beforeCreate() {
    console.log('beforeCreate')
  },
  beforeMount() {
    console.log('beforeMount')
  },
  beforeUnmount() {
    console.log('beforeUnmount')
  },
  beforeUpdate() {
    console.log('beforeUpdate')
  },

  //组件在内存中创建
  created() {
    console.log("created");
  },
  //组件第一次被渲染到页面上
  mounted() {
    console.log("mounted");
  },
  //组件被销毁了
  unmounted() {
    console.log("unmounted");
  },
  updated() {
    console.log('updated 组件被重新渲染 ')
  }
}
</script>

<style scoped>

</style>