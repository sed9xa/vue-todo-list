<template>
  <div class="container">
    <post-form></post-form>
    <post-list></post-list>
    <dialog-window class="dialog">
      <div class="dialog__header">
        <h2 class="dialog__header-title">Создать новую задачу</h2>
        <button
          class="dialog__header-close"
          @click="$store.commit('dialogVisibility', false)"
        >
          <i class="close-icon"></i>
        </button>
      </div>
      <div class="dialog__input">
        <p class="dialog__input-label">Описание</p>
        <input
          type="text"
          class="dialog__input-field"
          placeholder="Введите описание"
          v-model="description"
        />
      </div>
      <button class="dialog__create" @click="addPost">Создать</button>
    </dialog-window>
  </div>
</template>

<script>
import dialogWindow from "../src/components/UI/dialogWindow.vue";
import PostForm from "../src/components/postForm.vue";
import PostList from "../src/components/postList.vue";
export default {
  name: "App",
  components: {
    PostForm,
    PostList,
    dialogWindow,
  },
  data() {
    return {
      description: "",
    };
  },
  methods: {
    addPost() {
      /* let today = new Date();
      let now = today.toLocaleString(); */
      const newPost = {
        id: Date.now(),
        description: this.description,
        status: "В работе",
        date: 'now',
      };
      this.$store.commit('addPost', newPost);
      this.$store.commit('dialogVisibility', false)
    },
  },
  watch: {
    "$store.state.posts": {
      handler(val, oldval) {
        localStorage.setItem("posts", JSON.stringify(this.$store.state.posts));
      },
      deep: true,
    },
  },
  mounted() {
    if (localStorage.posts) {
      this.$store.commit("setPosts", JSON.parse(localStorage.posts));
    }
  },
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-size: 14px;
}
#app {
  font-family: sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  body,
  h1,
  h2,
  h3,
  h4 {
    font-family: "Montserrat", sans-serif;
    margin: 0;
  }
  button {
    cursor: pointer;
  }
}
.container {
  margin: 0 150px;
}
.dialog__header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
}
.dialog__header-title {
  font-size: 18px;
  color: #16191d;
}
.dialog__header-close {
  width: 22px;
  height: 22px;
  background-color: #314b99;
  color: white;
  border-radius: 5px;
  border: none;
  background-size: 50%;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url("../src/assets/close.svg");
}

.dialog__input {
  margin-bottom: 30px;
}
.dialog__input-label {
  text-align: left;
  line-height: 14px;
  padding-bottom: 5px;
}
.dialog__input-field {
  width: 100%;
  padding: 11px 0 11px 16px;
  border: 1px solid rgba(221, 226, 228, 1);
  border-radius: 8px;
}
.dialog__create {
  font-size: 18px;
  padding: 12px 40px;
  background-color: #f0f5ff;
  color: #314b99;
  border-radius: 8px;
  border: none;
}
</style>
