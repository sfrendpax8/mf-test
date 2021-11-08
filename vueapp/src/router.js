import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const routes = [
  {
    path: '/vueapp/a',
    name: 'RouteA',
    component: () => import(/* webpackChunkName: "RouteA" */ './components/RouteA.vue'),
  },
  {
    path: '/vueapp/b',
    name: 'RouteB',
    component: () => import(/* webpackChunkName: "RouteB" */ './components/RouteB.vue'),
  }
];

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
