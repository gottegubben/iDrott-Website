<template>
    <div style="display: flex; width: 100%;">
        <TintedBackground id="background" background-url="/public/temporary/images/GalleryBackground.png" style="flex-grow: 1; box-shadow: var(--shadow_variant_1);">
            <BaseLayout style="display: flex; align-items: center;">
                <h1 style="font-weight: bold;">Gallery</h1>
                <h6>A collection of images from certain events covered by iDrott.</h6>
            </BaseLayout>
        </TintedBackground>
    </div>
</template>

<script setup lang="ts">
    import BaseLayout from '../assets/components/BaseLayout.vue';

    import TintedBackground from '../assets/components/TintedBackground.vue';
</script>

<style scoped>
    #background {
        padding-top: var(--space_xl_clamped);
        padding-bottom: var(--space_xl_clamped);
    }
</style>