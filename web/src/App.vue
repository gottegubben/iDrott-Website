<!--
  The App component will be the first component that is
  injected to the page. It's only parent will be the body.
  The App component will be the wrapper for all the content
  that should be displayed on the actual website.
-->

<template>
  <p>testing</p>
  <div style="height: 50px; width: 50px;"><p>testing again</p></div>
  <p v-for="i in 50">TESTING...</p>
</template>

<style>
  /* @import url("./assets/css/variables/variables_import.css"); */

  @import url("./assets/css/body.css");
  @import url("./assets/css/app.css");
</style>