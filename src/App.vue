<template>
  <div class="container">
    <post-form></post-form>
    <post-list></post-list>
  </div>
</template>

<script>
import PostForm from "../src/components/postForm.vue";
import PostList from "../src/components/postList.vue";
export default {
  name: "App",
  components: {
    PostForm,
    PostList,
  },
};
</script>

<style lang="scss">
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
#app {
  font-size: 14px;
  font-family: sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.container{
  margin: 0 150px;
}
h1 {
  font-family: "Montserrat", sans-serif;
}
</style>
