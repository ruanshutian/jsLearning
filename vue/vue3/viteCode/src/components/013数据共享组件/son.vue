<template>
<div>
  <h1>test parents to son</h1>
  <p>{{msg}}</p>
  <p>{{user}}</p>
</div>
</template>

<script>
export default {
  name: "son",
  props:[
      'msg','user'
  ]
}
</script>

<style scoped>

</style>