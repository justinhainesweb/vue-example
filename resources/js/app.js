import Vue, {i18n} from '../vueConfig';
import App from './App.vue';

export const initializeApp = (element, component) => {
  new Vue({
    el: `#${element}`,
    i18n,
    ...component
  })
};

initializeApp('app', App);
