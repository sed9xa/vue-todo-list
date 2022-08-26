import { createStore } from 'vuex'

export default createStore({
  state: {
    posts: [
      { id: 1, title: "Try to conquer the world", status: 'Done', date: '22.04.2022' },
      { id: 2, title: "Feed the cat", status: 'in work', date: '22.04.2022' },
      { id: 3, title: "Take a shower", status: 'Done', date: '22.04.2022' },
    ],
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
