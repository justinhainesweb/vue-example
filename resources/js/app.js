import Vue, {i18n, appStore} from '../vueConfig';
import App from './App.vue';

export const initializeApp = (element, component) => {
  new Vue({
    el: `#${element}`,
    i18n,
    store: appStore,
    ...component
  })
};

initializeApp('app', App);
