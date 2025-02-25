<template>
    <PageContainer>
        <Hero></Hero>
        <GroupPresentation></GroupPresentation>
        <IndividualPresentation></IndividualPresentation>
        <Footer></Footer>
    </PageContainer>
</template>

<script setup lang="ts">
    import PageContainer from '../assets/components/containers/PageContainer.vue';
    import Hero from '../assets/components/pages/about/Hero.vue';
    import GroupPresentation from '../assets/components/pages/about/GroupPresentation.vue';
    import IndividualPresentation from '../assets/components/pages/about/IndividualPresentation.vue';
    import Footer from '../assets/components/Footer.vue';
</script>