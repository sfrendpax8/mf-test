<template>
  <div id="app">
    <p>Home Page - Vue 3</p>
    <div>
      <router-link to="/vueapp">Home</router-link>
      <router-link to="/vueapp/a">A</router-link>
      <router-link to="/vueapp/b">B</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
import isEmpty from 'lodash/isEmpty';

export default {
  name: 'App',
  components: {
   CustomButton, 
   RouteA,
  },
  mounted() {
    console.log(isEmpty({}));
  }
}
</script>
