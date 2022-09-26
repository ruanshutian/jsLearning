<template>


  <Art title="西游记" author="吴承恩"></Art>

  <Art :title="info.title" :author="info.author"></Art>
  <Art v-bind:title="info.title" v-bind:author="info.author"></Art>

</template>

<script>
export default {
  name: "App",
  data(){
    return {
      info:{
        title:"Aron",
        author:"aron"
      }
    }
  }
}
</script>

<style scoped>

</style>