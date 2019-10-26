import Vue from 'vue';
import VueRouter from 'vue-router';
import Start from '../views/Start.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Start',
    component: Start,
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import(/* webpackChunkName: "Dashboard" */ '../views/Dashboard.vue'),
  },
  {
    path: '/comparisons',
    name: 'Comparisons',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Comparisons" */ '../views/Comparisons.vue'),
  },
  {
    path: '/achievements',
    name: 'Achievements',
    component: () => import(/* webpackChunkName: "achievements" */ '../views/Achievements.vue'),
  },
  {
    path: '/tips',
    name: 'Tips',
    component: () => import(/* webpackChunkName: "tips" */ '../views/Tips.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
