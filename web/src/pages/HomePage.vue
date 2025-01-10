<template>
    <PageContainer>
        <Hero></Hero>
        <ContentContainer>
            <div style="height: 500px;"><h2 style="color: black;">Events</h2></div>
        </ContentContainer>
        <Contact></Contact>
        <Footer></Footer>
    </PageContainer>
</template>

<script setup lang="ts">
    import ContentContainer from '../assets/components/containers/ContentContainer.vue';
    import PageContainer from '../assets/components/containers/PageContainer.vue';

    /* Page specific components! */
    import Hero from '../assets/components/pages/home/Hero.vue';
    import Contact from '../assets/components/pages/home/Contact.vue';
    import Footer from '../assets/components/Footer.vue';
</script>