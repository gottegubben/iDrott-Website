<script setup lang="ts">
import { computed } from 'vue';

    const props = defineProps({
        clickEvent: { //The function that is executed on click.
            type: Function
        },
        text: {
            type: String
        },
        textSize: {
            type: String,
            default: "1em"
        },
        color: {
            type: String,
            required: true
        },
        colorHover: {
            type: String,
            required: true
        },
        boxshadow: {
            type: Boolean,
            default: false
        }
    });

    const style = computed(() => {
        return {
            '--color-main': props.color,
            '--color-hover': props.colorHover,

            'font-size': props.textSize,

            'box-shadow': props.boxshadow ? '0 0.1em 0.3em var(--color30)' : ''
        };
    });
</script>

<template>
    <button :style="style" @click="clickEvent">{{ text }}</button>
</template>

<style scoped>
    button {
        color: var(--color60);

        border-radius: 0.3em;

        padding: 0.4em 1.5em 0.4em 1.5em;

        font-weight: bold;
        font-family: Inter;

        background-color: var(--color-main);
        border: 0;
    }

    button:hover {
        cursor: pointer;

        background-color: var(--color-hover);
    }
</style>