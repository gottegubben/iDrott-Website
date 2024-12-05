<!--
    The member container contains all the member cards and should take all members
    (that's stored as a global json object) and display them to the screen.
-->

<template>
    <div id="people-container" style="display: grid; grid-template-columns: repeat(3, 1fr); width: 100%; height: 100%; gap: 30px; grid-auto-rows: 1fr;">
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