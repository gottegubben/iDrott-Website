<template>
  <PageContainer>
    <Hero></Hero>
    <Event></Event>
    <About></About>
    <Contact></Contact>
    <Footer></Footer>
  </PageContainer>
</template>

<script setup lang="ts">

import PageContainer from '../assets/components/containers/PageContainer.vue';

import Hero from '../assets/components/pages/home/Hero.vue';
import Event from '../assets/components/pages/home/Event.vue';
import About from '../assets/components/pages/home/About.vue';
import Contact from '../assets/components/pages/home/Contact.vue';
import Footer from '../assets/components/Footer.vue';
</script>
