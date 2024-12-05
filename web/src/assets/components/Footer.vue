<template>
    <div style="width: 100%; height: 200px; background-color: var(--tertiary_color);">
        <BaseLayout>
            <div id="footer_container">
                <div id="logo">
                    <IdrottTextLogo id="idrott-text-logo" style="fill: black;"></IdrottTextLogo>
                </div>
                <div id="line" style="width: 100%; height: 2px; background-color: black;"></div>
                <div id="other" style="display: flex; flex-direction: row; justify-content: space-between;">
                    <div id="logo-container" style="display: flex; flex-direction: row;">
                        <div v-for="i in 3" style="width: 32px; height: 32px; background-color: black;"></div>
                    </div>
                    <p style="color: black;">Developed by</p>
                    <p style="color: black;">Idrott 2024</p>
                </div>
            </div>
        </BaseLayout>
    </div>
</template>

<script setup lang="ts">
    import BaseLayout from './BaseLayout.vue';
    import IdrottTextLogo from './IdrottTextLogo.vue';
</script>

<style scoped>
    #idrott-text-logo {
        height: clamp(
            var(--font_h5_size_min),
            var(--font_h5_size),
            var(--font_h5_size_max)
        );
    }
</style>