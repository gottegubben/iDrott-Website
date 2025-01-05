<template>
    <PageContainer>
        <Hero></Hero> <!-- Takes care of the content container itself! -->
        <ContentContainer>

        </ContentContainer>
    </PageContainer>
</template>

<script setup lang="ts">
    import ContentContainer from '../assets/components/containers/ContentContainer.vue';
    import PageContainer from '../assets/components/containers/PageContainer.vue';

    /* Page specific components! */
    import Hero from '../assets/components/pages/home/Hero.vue';
</script>