import Vue from 'vue';
import VueRouter from 'vue-router';
import Dashboard from '../views/Dashboard.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: Dashboard,
  },
  {
    path: '/analysis',
    name: 'analysis',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "analysis" */ '../views/Analysis.vue'),
  },
  {
    path: '/achievements',
    name: 'achievements',
    component: () => import(/* webpackChunkName: "achievements" */ '../views/Achievements.vue'),
  },
  {
    path: '/tips',
    name: 'tips',
    component: () => import(/* webpackChunkName: "tips" */ '../views/Tips.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
