import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import VueI18n from 'vue-i18n';
import VeeValidate from 'vee-validate';
import store from './js/store';
import router from './js/router';
import axios from 'axios';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


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

Vue.prototype.$http = axios;
Vue.prototype.$appName = window.app_name;

/**
 * Localization
 */
const messages = {
  en: {
    password: {
      change: 'Please choose a password.',
      forgot: 'Forgot Password?',
    },
  },
};

const i18n = new VueI18n({
  locale: window.app_locale, // set locale
  fallbackLocale: 'en', // set fallback locale
  messages, // set locale messages
});


/**
 * Misc
 */
library.add(faSignInAlt);


/**
 * Components
 */
Vue.component('font-awesome-icon', FontAwesomeIcon);


const appStore = new Vuex.Store(store);


export {i18n, appStore, router};
export default Vue;
