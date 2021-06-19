import { createStore } from 'vuex';

export default createStore({
  state: {
    authModalShow: false,
  },
  // dispatchers
  mutations: {
    toggleAuthModal: (state) => {
      state.authModalShow = !state.authModalShow;
    },
  },
  actions: {
  },
  modules: {
  },
  // selectors
  getters: {
    // authModalShow: (state) => state.authModalShow,
  },
});
