<template>
    <Showpiece id="showpiece" style="z-index: 10; position: relative;"></Showpiece>
    <InfiniteSlide></InfiniteSlide>
    <Footer style="position: relative;"></Footer>
</template>

<script setup lang="ts">
    import BaseLayout from '../assets/components/BaseLayout.vue';

    import Showpiece from '../assets/components/home/Showpiece.vue';

    import LoremIpsumTest from '../assets/components/LoremIpsumTest.vue';

    import Footer from '../assets/components/Footer.vue';

    import InfiniteSlide from '../assets/components/InfiniteSlide.vue';
</script>

<style scoped>
    #showpiece {
        box-shadow: var(--shadow_variant_1);
    }
</style>