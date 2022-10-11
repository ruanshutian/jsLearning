<template>
<div>
  <li>this is MyHome</li>
  <li>this is MyHome</li>
  <li>this is MyHome</li>
  <button @click="goToMovie(3)">GoToMovie</button>
</div>
</template>

<script>
export default {
  name: "MyHome",
  methods:{
    goToMovie(id){
      this.$router.push("/movie/"+id)
    }
  }
}
</script>

<style scoped>

</style>