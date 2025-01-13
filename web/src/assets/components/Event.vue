<template>
    <div :style="style" class="event">
        
    </div>
</template>

<script setup lang="ts">
    import { computed, type PropType } from 'vue';
    import type { IEventViewModel } from '../typescripts/viewmodels/IEventViewModel';

    const props = defineProps({
        eventViewModel: {
            required: true,
            type: Object as PropType<IEventViewModel>
        }
    });

    const style = computed(() => {
        return {
            "background-image": `linear-gradient(var(--overlay_color_2), var(--overlay_color_2)), url(${props.eventViewModel.imgUrl})`
        };
    });
</script>

<style>
    .event {
        aspect-ratio: 3 / 2;
        width: 100%;
        background-size: contain;
    }
</style>