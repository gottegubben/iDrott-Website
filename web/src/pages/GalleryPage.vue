<template>
    <BaseLayout>
        <p>This is gallery!</p>
        <p v-for="i in 50">Testing {{ i }}</p>
    </BaseLayout>
</template>

<script setup lang="ts">
    import BaseLayout from '../assets/components/BaseLayout.vue';
</script>