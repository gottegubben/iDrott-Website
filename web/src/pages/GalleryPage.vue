<template>
    <div style="display: flex; width: 100%;">
        <TintedBackground background-url="/public/temporary/images/GalleryBackground.png" style="flex-grow: 1;">
            <BaseLayout style="display: flex; align-items: center;">
                <h1 style="font-family: inter; font-size: 4em; color: var(--secondary_color); margin-bottom: 10px;">Gallery</h1>
                <h3 style="font-family: inter; font-size: 1.3em; color: var(--secondary_color); font-weight: 100; margin-bottom: 50px;">A collection of images from certain events covered by iDrott.</h3>
            </BaseLayout>
        </TintedBackground>
    </div>
</template>

<script setup lang="ts">
    import BaseLayout from '../assets/components/BaseLayout.vue';

    import TintedBackground from '../assets/components/TintedBackground.vue';
</script>