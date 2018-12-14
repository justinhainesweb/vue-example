import Vue, {i18n, appStore, router} from './vueConfig';
import App from './App.vue';
import 'es6-promise/auto';
import '@/css/grid.scss';
import 'prismjs';
import Prism from 'vue-prism-component';

Vue.component('login-popup', (resolve) => {
  import(/* webpackChunkName: "login-popup" */'./LoginPopup.vue')
    .then((LoginPopup) => {
      resolve(LoginPopup.default);
    });
});

Vue.component('prism', Prism);

export const initializeApp = (element, component) => {
  new Vue({
    el: `#${element}`,
    i18n,
    store: appStore,
    router,
    ...component
  })
};

initializeApp('app', App);

