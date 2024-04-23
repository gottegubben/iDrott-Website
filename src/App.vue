<script setup lang="ts">
  import { RouterLink, RouterView } from 'vue-router'

  import Header from './components/Header.vue';
</script>

<template>
  <Header></Header>
</template>

<style>
  body {
    background-color: var(--color60);

    font-family: var(--font_main);
  }
</style>