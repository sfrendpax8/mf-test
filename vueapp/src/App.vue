<template>
  <div id="vueapp">
    <h1 class="text-4xl">Vue 2 App</h1>
    <ul>
      <li>- Has an external global.css asset</li>
      <li>- Does not include Vue in its bundle</li>
      <li>- Includes a single lodash method in its bundle</li>
      <li>- Has a heading with a Tailwind class, but it's not being applied because this app does not have TW configured. It would inherit the class if shared-library used it.</li>
    </ul>
    <p>Internal Routes (lazy loaded)</p>
    <div class="routes">
      <router-link to="/vueapp">Home</router-link>
      <router-link to="/vueapp/a">A</router-link>
      <router-link to="/vueapp/b">B</router-link>
    </div>
    <p>External Routes</p>
    <div class="routes">
      <router-link to="/vue3app">Vue3App - this link leads to a different MF</router-link>
    </div>
    <p>Router view:</p>
    <router-view />
  </div>
</template>

<script>
import isEmpty from 'lodash/isEmpty';

export default {
  name: 'App',
  mounted() {
    console.log('Lodash in vueapp: isEmpty === ', isEmpty({}));
  }
}
</script>

<style lang="scss">
#vueapp {
  border: 3px dashed blue;
  padding: 2rem;
  h1, .routes, ul {
    margin-bottom: 2rem;
  }
  p {
    margin-bottom: 1rem;
  }
  .routes {
    width: 50%;
    padding: 1rem;
    a {
      margin-right: 2rem;
    }
  }
}
</style>
