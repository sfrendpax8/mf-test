<template>
  <div class="route-a">
    <p>This route is lazy loaded, meaning the entire route is a separate JS file</p>
    <ul>
      <li>- Has an external image asset</li>
      <li>- Has local CSS that overrides the global.css file (red color)</li>
    </ul>
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
</template>

<script>

export default {
  name: 'RouteA',
}
</script>

<style lang="scss">
.route-a {
  color: red;
}
</style>
