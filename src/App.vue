<script setup lang="ts">
  import { RouterView } from 'vue-router'

  import Header from './components/Header.vue';
  import Footer from './components/Footer.vue';
</script>

<template>
  <Header></Header>
  <RouterView></RouterView> <!-- This is where the different pages will be loaded! -->
  <Footer></Footer>
</template>

<style>
  body {
    background-color: var(--color60);

    font-family: var(--font-main);
  }
</style>