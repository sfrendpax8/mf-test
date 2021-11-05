<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <p>Hello</p>
  </div>
</template>

<script>
import _ from 'lodash';
import XLSX from 'lodash';

export default {
  name: 'App',
  mounted() {
    console.log(_.isEmpty({}));
    console.log(XLSX);
  }
}
</script>
