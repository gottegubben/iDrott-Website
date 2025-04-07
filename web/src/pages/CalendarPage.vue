<template>
    <PageContainer>
        <Hero></Hero>
        <Calendar></Calendar>
        <Footer></Footer>
    </PageContainer>
</template>

<script setup lang="ts">
    import PageContainer from '../assets/components/containers/PageContainer.vue';
    import Hero from '../assets/components/pages/calendar/Hero.vue';
    import Calendar from '../assets/components/pages/calendar/Calendar.vue';
    import Footer from '../assets/components/Footer.vue';
</script>