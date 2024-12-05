<template>
    <button :class="'my_button ' + computedClassName">{{ props.title }}</button>
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
            type: Object as PropType<ButtonStyle>
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
    .my_button {
        padding: 0.5em 1.3em 0.5em 1.3em;
        border-radius: 0.3em;
        border: 0;
    }

    .my_button_variant_1 {
        color: var(--primary_color);
        background-color: var(--secondary_color);
    }
    .my_button_variant_1:hover {
        cursor: pointer;
        background-color: var(--secondary_color_1);
    }

    .my_button_variant_2 {
        color: var(--secondary_color);
        background-color: var(--tertiary_color);
    }
    .my_button_variant_2:hover {
        cursor: pointer;
        background-color: var(--tertiary_color_1);
    }
</style>