import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import VueI18n from 'vue-i18n';
import VeeValidate from 'vee-validate';
import store from './js/store';

/**
 * Config
 */
Vue.config.devtools = process.env.NODE_ENV !== 'production';
Vue.config.productionTip = process.env.NODE_ENV !== 'production';
Vue.config.performance = process.env.NODE_ENV !== 'production';

/**
 * Plugins
 */
Vue.use(Vuex);
Vue.use(VueI18n);
Vue.use(VueRouter);
Vue.use(VeeValidate);


/**
 * Localization
 */
const messages = {
  en: {
    app: 'App',
  },
};

const i18n = new VueI18n({
  locale: window.app_locale, // set locale
  fallbackLocale: 'en', // set fallback locale
  messages, // set locale messages
});

const appStore = new Vuex.Store(store);


export {i18n, appStore};
export default Vue;
