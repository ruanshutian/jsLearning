<template>

  <div>
    <h3>文章：{{title}}</h3>
    <h5>作者：{{author}}</h5>
  </div>

</template>



<script>
export default {
  name: "Article",
  props:[
      'title','author'
  ]
}
</script>

<style scoped>

</style>