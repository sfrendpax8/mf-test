import { h, createApp } from 'vue'
import singleSpaVue from 'single-spa-vue';

import App from './App.vue';
import './index.css';

const vueLifecycles = singleSpaVue({
  createApp,
  appOptions: {
    render() {
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
