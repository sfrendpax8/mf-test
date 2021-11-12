// import './set-public-path';
import Vue from 'vue'
import singleSpaVue from 'single-spa-vue';

import './assets/global.css';

import App from './App.vue';
import router from './router';

Vue.config.productionTip = false

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    render(h) {
      return h(App);
    },
    router,
  }
});

export const bootstrap = vueLifecycles.bootstrap;
export const mount = vueLifecycles.mount;
export const unmount = vueLifecycles.unmount;

  // if (process.env.NODE_ENV === 'local') {
  //   new Vue({
  //     render: h => h(App),
  //   }).$mount('#app')
  // }
