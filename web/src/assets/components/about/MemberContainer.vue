<!--
    The member container contains all the member cards and should take all members
    (that's stored as a global json object) and display them to the screen.
-->

<template>
    <div id="people-container">
        <MemberCard v-for="i in 6"></MemberCard>
    </div>
</template>

<script setup lang="ts">
    import MemberCard from './MemberCard.vue';

    const members = [
        {
            
        }
    ]

    const memberViewModels = [
        {
            
        }
    ]
</script>

<style scoped>
    #people-container {
        width: 100%;

        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-auto-rows: 1fr;
        gap: var(--space_xl_clamped); 

        margin-top: var(--space_xxl_clamped);
        margin-bottom: var(--space_xxl_clamped);
    }
</style>