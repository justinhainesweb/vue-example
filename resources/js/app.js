import Vue, {i18n, appStore, router} from '../vueConfig';
import App from './App.vue';

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
