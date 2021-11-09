<template>
  <div id="app">
    <p>Home Page - Vue 3</p>
  </div>
</template>

<script>
import isEmpty from 'lodash/isEmpty';

export default {
  name: 'App',
  components: {
  //  CustomButton, 
  },
  mounted() {
    console.log(isEmpty({}));
  }
}
</script>
