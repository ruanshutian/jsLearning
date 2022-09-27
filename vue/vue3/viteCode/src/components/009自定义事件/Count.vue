<template>

  <div>-------------自定义事件------------------</div>
  <div>
    count = {{count}}
  </div>
  <button @click="add">无参数监听</button>
  <button @click="add2">带参数监听</button>



</template>

<script>
export default {
  name: "Count",
  data(){
    return{
      count:3,
    }
  },
  // 声明自定义事件
  emits:[
      'countChange'
  ]
  ,
  computed:{
    count2(){
      return this.count*2;
    }
  },
  methods:{
    add(){
      this.count++;
      //触发自定义事件
      this.$emit('countChange');
    },
    add2(){
      this.count++;
      //触发自定义事件
      this.$emit('countChange',this.count);
    }
  }
}
</script>

<style scoped>

</style>