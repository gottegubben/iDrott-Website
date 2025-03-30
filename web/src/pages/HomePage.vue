<template>
  <PageContainer>
    <Hero></Hero>
    <Event></Event>
    <About></About>
    <Contact></Contact>
    <Footer></Footer>

    <!-- 🔽 This is new: show album list after the footer -->
    <div>
      <h2>Albums from server:</h2>
      <div v-if="albums.length === 0">
        Loading...
      </div>
      <ul>
        <li v-for="album in albums" :key="album">{{ album }}</li>
      </ul>
    </div>
  </PageContainer>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

import PageContainer from '../assets/components/containers/PageContainer.vue';

import Hero from '../assets/components/pages/home/Hero.vue';
import Event from '../assets/components/pages/home/Event.vue';
import About from '../assets/components/pages/home/About.vue';
import Contact from '../assets/components/pages/home/Contact.vue';
import Footer from '../assets/components/Footer.vue';

const albums = ref<string[]>([]);

onMounted(() => {
  fetch("http://localhost:3000/api/GetAllAlbums")
    .then(res => res.json())
    .then(data => {
      albums.value = data;
    })
    .catch(err => {
      console.error("Failed to fetch albums:", err);
    });
});
</script>
