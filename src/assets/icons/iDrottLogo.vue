<script setup lang="ts">
    const props = defineProps({
        //The width of the logo. Ex: width = "50px".
        height: {
            type: String,
            required: true
        }
    });
</script>

<template>
    <img :style="{'height': height}" src="../images/iDrott23Logo.png" alt="Logo">
</template>