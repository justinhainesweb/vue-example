import VueRouter from 'vue-router';
import Home from "./Home";
import Profile from "./auth/Profile";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
  },
];

const router = new VueRouter({
  routes,
});

export {routes};
export default router;
