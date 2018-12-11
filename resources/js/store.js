import axios from 'axios';

const store = {
  state: {
    showLoginPopup: false,
    authentication: {
      user: {},
      logged_in: false,
    }
  },
  mutations: {
    toggleLoginPopup(state) {
      state.showLoginPopup = !state.showLoginPopup;
    },
    closeLoginPopup(state) {
      state.showLoginPopup = false;
    },
    login(state, user) {
      state.authentication.user = user;
      state.authentication.logged_in = true;
    },
    logout(state) {
      state.authentication.user = {};
      state.authentication.logged_in = false;
    }
  },
  actions: {
    toggleLoginPopup(context) {
      context.commit('toggleLoginPopup')
    },
    closeLoginPopup(context) {
      context.commit('closeLoginPopup')
    },
    login(context, data) {
      return axios.post('/rest-auth/login/', data).then((res) => {
        context.commit('login', {...data, ...res.data});
        return res.data;
      }).catch((err) => {
        console.error(err);
      });
    },
    logout(context) {
      context.commit('logout');
    },
  },
  getters: {
    loginPopupState(state) {
      return state.showLoginPopup;
    },
    authenticated(state) {
      return state.authentication.logged_in;
    },
  },
};

export default store;
