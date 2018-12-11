import Vue from 'vue';
import VueRouter from 'vue-router';
import VueI18n from 'vue-i18n';

/**
 * Config
 */
Vue.config.devtools = process.env.NODE_ENV !== 'production';
Vue.config.productionTip = process.env.NODE_ENV !== 'production';
Vue.config.performance = process.env.NODE_ENV !== 'production';

/**
 * Plugins
 */
Vue.use(VueI18n);
Vue.use(VueRouter);


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


export {i18n};
export default Vue;
