import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import VueI18n from 'vue-i18n';
import VeeValidate from 'vee-validate';
import store from './store';
import router from './router';
import axios from 'axios';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSignInAlt, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import utils from './utils';
import messages from '@/lang/en';

/**
 * Config
 */
Vue.config.devtools = utils.isProduction;
Vue.config.productionTip = utils.isProduction;
Vue.config.performance = utils.isProduction;

/**
 * Plugins
 */
Vue.use(Vuex);
Vue.use(VueI18n);
Vue.use(VueRouter);
Vue.use(VeeValidate);

Vue.prototype.__STATIC__ = window.static;
Vue.prototype.$http = axios;
Vue.prototype.$appName = window.app_name;

/**
 * Localization
 */
const i18n = new VueI18n({
  locale: window.app_locale, // set locale
  fallbackLocale: 'en', // set fallback locale
  messages, // set locale messages
});

// if (module.hot) {
//   module.hot.accept(['@/lang/en',], function () {
//     i18n.setLocaleMessage('en', import(/* webpackChunkName: "lang-[request]" */'@/lang/en').default);
//     // Or the following hot updates via $i18n property
//     // app.$i18n.setLocaleMessage('en', require('./en').default)
//     // app.$i18n.setLocaleMessage('ja', require('./ja').default)
//   })
// }
//
// const loadedLanguages = ['en']; // our default language that is preloaded
//
// function setI18nLanguage(lang) {
//   i18n.locale = lang;
//   axios.defaults.headers.common['Accept-Language'] = lang;
//   document.querySelector('html').setAttribute('lang', lang);
//   return lang;
// }
//
// export function loadLanguageAsync(lang) {
//   if (i18n.locale !== lang) {
//     if (!loadedLanguages.includes(lang)) {
//       return import(/* webpackChunkName: "lang-[request]" */`@/lang/${lang}`).then(msgs => {
//         i18n.setLocaleMessage(lang, msgs.default);
//         loadedLanguages.push(lang);
//         return setI18nLanguage(lang);
//       })
//     }
//     return Promise.resolve(setI18nLanguage(lang));
//   }
//   return Promise.resolve(lang);
// }
//
// router.beforeEach((to, from, next) => {
//   const lang = to.params.lang;
//   loadLanguageAsync(lang).then(() => next());
// });


/**
 * Misc
 */
library.add(faSignInAlt);
library.add(faChevronRight);
library.add(faGithub);


/**
 * Components
 */
Vue.component('icon', FontAwesomeIcon);


const appStore = new Vuex.Store(store);


export {i18n, appStore, router};
export default Vue;
