<template>
  <div id="app">
    <p>Home Page</p>
    <div>
      <router-link to="/vueapp">Home</router-link>
      <router-link to="/vueapp/a">A</router-link>
      <router-link to="/vueapp/b">B</router-link>
      <router-link to="/vue3app">Vue 3 App</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
import isEmpty from 'lodash/isEmpty';

export default {
  name: 'App',
  props: {
    auth: {
      type: Object,
      required: true,
    },
  },
  async mounted() {
    console.log(await this.auth.checkIfAuthenticated());
    return isEmpty({});
  }
}
</script>
