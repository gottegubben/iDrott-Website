<script setup lang="ts">
    const props = defineProps({
        color: {
            type: String,
            required: true
        }
    });
</script>

<template>
    <div id="hamburger-container">
        <svg width="36" height="28" viewBox="0 0 36 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="36" height="6" rx="3" :fill="props.color"/>
            <rect y="11" width="36" height="6" rx="3" :fill="props.color"/>
            <rect y="22" width="36" height="6" rx="3" :fill="props.color"/>
        </svg>
    </div>
</template>