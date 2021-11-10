<template>
  <div id="app">
    <p>Home Page - Vue 3</p>
    <custom-button />
  </div>
</template>

<script>
import isEmpty from 'lodash/isEmpty';
import { CustomButton } from '@test/shared-components';

export default {
  name: 'App',
  components: {
   CustomButton, 
  },
  mounted() {
    console.log(isEmpty({}));
  }
}
</script>
