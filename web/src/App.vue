<!--
  The App component will be the first component that is
  injected to the page. It's only parent will be the body.
  The App component will be the wrapper for all the content
  that should be displayed on the actual website.
-->

<template>
  <Banner></Banner>
  <Header></Header>
  <RouterView></RouterView>
</template>

<script setup lang="ts">
  import Banner from './assets/components/Banner.vue';
  import Header from './assets/components/Header.vue';
</script>

<style>
  @import url("./assets/css/variables/variables_import.css");

  @import url("./assets/css/body.css");
  @import url("./assets/css/app.css");
</style>