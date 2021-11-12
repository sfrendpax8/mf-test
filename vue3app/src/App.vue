<template>
  <div id="app">
    <p class="text-gray-500">Home Page - Vue 3</p>
    <custom-button />
  </div>
</template>

<script>
import { CustomButton } from '@test/shared-components';

export default {
  name: 'App',
  components: {
   CustomButton, 
  },
}
</script>
