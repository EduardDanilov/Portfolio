import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  state () {
    return {
      count: 555555555
    }
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})

export default store;