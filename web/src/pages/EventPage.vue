<template>
    <div style="display: flex; width: 100%;">
        <TintedBackground id="background" background-url="/public/temporary/images/GalleryBackground.png" style="flex-grow: 1; box-shadow: var(--shadow_variant_1);">
            <BaseLayout style="display: flex; align-items: center;">
                <h1 style="font-weight: bold;">Events</h1>
                <h6>All events coming up are displayed below!</h6>
            </BaseLayout>
        </TintedBackground>
    </div>
    <Footer></Footer>
</template>

<script setup lang="ts">
    import TintedBackground from '../assets/components/TintedBackground.vue';
    import Footer from '../assets/components/Footer.vue';
    import BaseLayout from '../assets/components/BaseLayout.vue';
</script>

<style scoped>
    #background {
        padding-top: var(--space_xl_clamped);
        padding-bottom: var(--space_xl_clamped);
    }
</style>