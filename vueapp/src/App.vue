<template>
  <div id="app">
    <p>Home</p>
    <router-view />
  </div>
</template>

<script>
import isEmpty from 'lodash/isEmpty';

export default {
  name: 'App',
  mounted() {
    console.log(isEmpty({}));
  }
}
</script>
