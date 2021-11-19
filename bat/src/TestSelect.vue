<template>
  <div>
    <select v-model="selected">
      <option v-for="option in options" :key="option" :value="option">{{ option }}</option>
      <option value="test">test</option>
    </select>
    <span v-for="option in options" :key="option">{{ option }}</span>
    <span>{{ selected }}</span>
    <span>{{ options }}</span>
    <span>{{ Array.isArray(options) }}</span>
  </div>
</template>

<script setup>
    import { ref } from 'vue'
    const options = ['Autotask', 'Connectwise', 'Kaseya', 'Repairshopr', 'Syncro', 'Tigerpaw']
    const selected = ref('Autotask')
    console.log(options);
</script>