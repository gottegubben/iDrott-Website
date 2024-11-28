<template>
    <BaseLayout>
        <div style="height: 500px; width: 100%;"></div>
        <div id="people-container" style="display: grid; grid-template-columns: repeat(3, 1fr); width: 100%; height: 100%; gap: 30px; grid-auto-rows: 1fr;">
            <div v-for="i in 6" style="aspect-ratio: 1 / 1; background: url(/public/temporary/images/TempProfileImage.png); background-size: contain;">
                <p>Dalxa</p>
                <p>Ordförande</p>
            </div>
        </div>
    </BaseLayout>
</template>

<script setup lang="ts">
    import BaseLayout from '../assets/components/BaseLayout.vue';
</script>