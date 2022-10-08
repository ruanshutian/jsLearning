<template>
get
  <Get></Get>
  <Post></Post>
</template>

<script>
import Post from "./post.vue";
import Get from "./get.vue";
export default {
  name: "App",
  components: {Post,Get}
}
</script>

<style scoped>

</style>