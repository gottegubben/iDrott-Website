<template>
    <BaseLayout>
        <div id="people-container" style="display: grid; grid-template-columns: repeat(3, 1fr); width: 100%; height: 100%; gap: 30px; grid-auto-rows: 1fr;">
            <MemberCard v-for="i in 6"></MemberCard>
        </div>
    </BaseLayout>
</template>

<script setup lang="ts">
    import BaseLayout from '../assets/components/BaseLayout.vue';

    import MemberCard from '../assets/components/Gallery/MemberCard.vue';
</script>