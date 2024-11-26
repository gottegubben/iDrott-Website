<template>
    <BaseLayout> 
        <div id="people-container" style="display: grid; grid-template-columns: repeat(3, 1fr); width: 100%; height: 100%; gap: 30px; grid-auto-rows: 1fr;">
            <div v-for="i in 6" style="background-color: black;">
                <p>Dalxa</p>
                <p>Ordförande</p>
            </div>
        </div>
    </BaseLayout>
</template>

<script setup lang="ts">
    import BaseLayout from '../assets/components/BaseLayout.vue';
</script>