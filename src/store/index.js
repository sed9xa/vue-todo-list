import { createStore } from "vuex";

export default createStore({
  state: {
    show: false,
    posts: [
      {
        id: 1,
        description: "Размещение новостей на сайте",
        status: "В работе",
        date: "22.04.2022",
      },
      {
        id: 2,
        description: "Внедрить Wi-fi для читателей",
        status: "В работе",
        date: "22.04.2022",
      },
      {
        id: 3,
        description: "Отредактировать раздел “Доступная среда”",
        status: "В работе",
        date: "22.04.2022",
      },
    ],
  },
  getters: {
    getPosts(state){
      return state.posts
    }
  },
  mutations: {
    setPosts(state, posts){
      state.posts = posts;
    },
    dialogVisibility(state, bool) {
      state.show = bool;
    },
    addPost(state, post){
      state.posts.push(post);
    },
    changeStatus(state, payload) {
      if (
        state.posts.find((post) => post.id === payload).status === "Выполнено"
      ) {
        state.posts.find((post) => post.id === payload).status = "В работе";
      } else if (
        state.posts.find((post) => post.id === payload).status === "В работе"
      ) {
        state.posts.find((post) => post.id === payload).status = "Выполнено";
      }
    },
  },
  actions: {},
  modules: {},
});
