const store = {
  state: {
    showLoginPopup: false,
  },
  mutations: {
    toggleLoginPopup(state) {
      state.showLoginPopup = !state.showLoginPopup;
    },
  },
  actions: {
    toggleLoginPopup(context) {
      context.commit('toggleLoginPopup')
    }
  },
  getters: {
    showLoginPopup(state) {
      return state.showLoginPopup;
    },
  },
};

export default store;
