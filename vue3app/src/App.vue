<template>
  <div id="vue3app">
    <p class="text-gray-500">Vue 3 App</p>
    <ul>
      <li>- Includes Vue3 in its bundle since we're only sharing Vue 2</li>
      <li>- Includes a single lodash method in its bundle</li>
      <li class="text-error">- Has TW configured and uses the shared-components TW config as a preset. This red color is derived from Propulsion's config</li>
    </ul>
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
    console.log('Lodash in vue3app: isEmpty === ', isEmpty({}));
  }
}
</script>

<style lang="scss">
#vue3app {
  ul {
    padding: 3rem;
  }
}
</style>
