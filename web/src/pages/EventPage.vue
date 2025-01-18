<template>
    <PageContainer>
        <Hero></Hero>
        <Event></Event>
    </PageContainer>
</template>

<script setup lang="ts">
    import PageContainer from '../assets/components/containers/PageContainer.vue';

    /* Page specific components. */
    import Hero from '../assets/components/pages/event/Hero.vue';
    import Event from '../assets/components/pages/event/Event.vue';
</script>