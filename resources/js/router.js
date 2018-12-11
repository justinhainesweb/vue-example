import VueRouter from 'vue-router';
import LoggedIn from './auth/LoggedIn.vue';

const routes = [
  {
    path: '/',
    component: LoggedIn,
  },
];

const router = new VueRouter({
  routes,
});

export {routes};
export default router;
