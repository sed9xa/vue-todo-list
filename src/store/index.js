import { createStore } from "vuex";

export default createStore({
  state: {
    show: false,
    searchQuery: "",
      filterOption: "",
      filterOptions: [
        { id: 1, value: "title", name: "By title" },
        { id: 2, value: "body", name: "By description" },
      ],
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
    },
    getCurrentPost: (state) => (id) => {
      return state.posts.find(post => post.id === id)
    },
    filteredPosts(state) {
      return [...state.posts].sort((post1, post2) => {
        if (state.filterOption != 0) {
          return post1[state.filterOption].localeCompare(
            post2[state.filterOption]
          );
        }
        else return state.posts
      });
    },
    searchQueryPosts(state, getters){
      return getters.filteredPosts.filter(post => post.description.includes(state.searchQuery))
    }
  },
  mutations: {
    setPosts(state, posts){
      state.posts = posts;
    },
    setSearchQuery(state, searchQuery){
      state.searchQuery = searchQuery
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
