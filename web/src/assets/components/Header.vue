<template>
    <div id="header-base">
        <BaseLayout>
            <div id="logo-container"></div>
            <div id="link-container"></div>
        </BaseLayout>
    </div>
</template>

<script setup lang="ts">
    import BaseLayout from './BaseLayout.vue';
</script>

<style scoped>
    #header-base {
        width: 100%;
        height: 70px;
        background-color: var(--primary_color);
    }
</style>