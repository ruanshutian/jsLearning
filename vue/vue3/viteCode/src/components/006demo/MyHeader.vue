<template>

  <div class="headerContainer" :style="{backgroundColor:bgcolor,color:color}">
    {{title || 'Header组件'}}
  </div>

</template>

<script>
export default {
  name: "MyHeader",
  props:[
      'title','bgcolor','color'
  ]
}
</script>

<style scoped>
.headerContainer{
  height: 45px;
  line-height: 45px;
  width: 100%;
  text-align: center;
  position: fixed;
  top:0px;
  left: 0px;
}
</style>