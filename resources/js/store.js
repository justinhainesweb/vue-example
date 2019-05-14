import Vue from 'vue';
import Vuex from 'vuex';
import {axios} from './utils';

Vue.use(Vuex);

// Make Axios play nice with Django CSRF
axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';

export default new Vuex.Store({
  state: {
    authUser: {},
    isAuthenticated: !!localStorage.getItem('token') || false,
    jwt: localStorage.getItem('token'),
    endpoints: {
      // TODO: Remove hardcoding of dev endpoints
      obtainJWT: 'http://127.0.0.1:8007/api/v1/auth/token/obtain/',
      refreshJWT: 'http://127.0.0.1:8007/api/v1/auth/token/refresh/',
      baseUrl: 'http://127.0.0.1:8007/api/v1/'
    },
    showLoginPopup: false,
  },

  mutations: {
    initialize(state) {

    },
    setAuthUser(state, {
      authUser,
      isAuthenticated
    }) {
      Vue.set(state, 'authUser', authUser);
      Vue.set(state, 'isAuthenticated', isAuthenticated);
    },
    updateToken(state, newToken) {
      // TODO: For security purposes, take localStorage out of the project.
      localStorage.setItem('token', newToken);
      state.jwt = newToken;
    },
    removeToken(state) {
      // TODO: For security purposes, take localStorage out of the project.
      localStorage.removeItem('token');
      state.jwt = null;
    },

    toggleLoginPopup(state) {
      state.showLoginPopup = !state.showLoginPopup;
    },
    closeLoginPopup(state) {
      state.showLoginPopup = false;
    },
  },

  actions: {
    toggleLoginPopup(context) {
      context.commit('toggleLoginPopup')
    },
    closeLoginPopup(context) {
      context.commit('closeLoginPopup')
    },
    logout(context) {
      context.commit('removeToken');
      context.commit('setAuthUser', {
        authUser: {},
        isAuthenticated: false,
      });
    },
    initialize(context) {
      if (state.jwt) {
        axios.post('/api/v1/auth/token/verify/', {token: state.jwt}).then((response) => {
          if (response.status === 200) {

          }
        }).catch(() => {
          context.dispatch('logout');
        });
      }
    },
  },

  getters: {
    loginPopupState(state) {
      return state.showLoginPopup;
    },
    isAuthenticated(state) {
      return state.isAuthenticated;
    },
    authUser(state) {
      return state.authUser;
    },
  },
})
