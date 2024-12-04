<!-- 
    The tinted background component will hold an image as background
    that will be tinted in a certain way. The tinted background component
    can also be used as a container to hold other things on top of it!
-->

<template>
    <div class="tinted-background-container" :style="style">
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
    import { defineProps, computed } from 'vue';

    const props = defineProps({
        backgroundUrl: {
            required: true,
            type: String
        }
    });

    const colorUsed     = "--primary_color";
    const gradientColor = `hsl(var(${colorUsed}_hue), var(${colorUsed}_sat), var(${colorUsed}_lig), 0.9)`;

    const style = computed(() => {
        return {
            "background": `linear-gradient(${gradientColor}, ${gradientColor}), url(${props.backgroundUrl})`,
            "flex-grow": 1,
            "background-size": "cover",
            "background-repeat": "no-repeat"
        };
    });
</script>