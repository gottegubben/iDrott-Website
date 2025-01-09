<template>
    <button :class="'basic_button ' + computedClassName">{{ props.title }}</button>
</template>

<script setup lang="ts">
    import { defineProps, computed } from 'vue';
    import type { PropType } from 'vue';

    import { ButtonStyle } from '../typescripts/other/ButtonStyle';

    const props = defineProps({
        title: {
            required: true,
            type: String
        },

        buttonStyle: {
            required: false,
            type: Object as PropType<ButtonStyle>,
            default: ButtonStyle.variant_1
        }
    });

    const computedClassName = computed(() => {
        if(props.buttonStyle == undefined) return ButtonStyle.variant_1;
        else {
            return props.buttonStyle;
        }
    });
</script>

<style>
    .basic_button {
        padding: 0.5em 1.3em 0.5em 1.3em;
        border-radius: 0.3em;
        border: 0;
    }

    .basic_button_variant_1 {
        color: var(--primary_color) !important;
        background-color: var(--secondary_color);
    }
    .basic_button_variant_1:hover {
        cursor: pointer;
        background-color: var(--secondary_color_1);
    }

    .basic_button_variant_2 {
        color: var(--secondary_color) !important;
        background-color: var(--tertiary_color);
    }
    .basic_button_variant_2:hover {
        cursor: pointer;
        background-color: var(--tertiary_color_1);
    }
</style>