import './set-public-path';
import Vue from 'vue'
import singleSpaVue from 'single-spa-vue';


import App from './App.vue'

Vue.config.productionTip = false

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    render(h) {
      return h(App);
    },
  }
});

export const bootstrap = vueLifecycles.bootstrap;
export const mount = vueLifecycles.mount;
export const unmount = vueLifecycles.unmount;

// new Vue({
//   render: h => h(App),
// }).$mount('#app')
