<template>
  <Header></Header>

  <RouterView></RouterView>
</template>

<script setup lang="ts">
  import Header from './assets/components/Header.vue';
</script>

<style>
  @import url("./assets/css/basic.css");
  @import url("./assets/css/other/other_imports.css");
  @import url("./assets/css/dynamic_margin.css");
</style>