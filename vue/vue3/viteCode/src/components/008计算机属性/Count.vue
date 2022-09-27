<template>

  <div>-------------计算属性------------------</div>
  <div>
    {{ count }} * 2 = {{count2}}
  </div>



</template>

<script>
export default {
  name: "Count",
  data(){
    return{
      count:3,
    }
  },
  computed:{
    count2(){
      return this.count*2;
    }
  }
}
</script>

<style scoped>

</style>