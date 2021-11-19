<template>
  <div id="app">
    Bat Select Connection
    <bat-select-connection />
    <!-- Test Select
    <test-select />
    Test Shared Select
    <test-shared-select />
    Test Select 2
    <test-select-a /> -->
  </div>
</template>

<script>
import isEmpty from 'lodash/isEmpty';
// import { TestSelect as TestSharedSelect } from '@test/shared-components';
import { BatSelectConnection } from '@test/bat-components';
// import TestSelect from './TestSelect.vue';
// import TestSelectA from './components/BatSelectConnection.vue';

export default {
  name: 'App',
  components: {
   BatSelectConnection,
  //  TestSelect,
  //  TestSharedSelect,
  //  TestSelectA,
  },
  mounted() {
    console.log(isEmpty({}));
  }
}
</script>
