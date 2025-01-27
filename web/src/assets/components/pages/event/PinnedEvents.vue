<template>
    <div class="pinned_events">
        <PinIcon class="pin_icon"></PinIcon>
        <h3 class="font_color_primary font_weight_bold">Pinned events</h3>
    </div>
    <div class="pinned_events_container">
        <Event v-for="event in events" :event-view-model="event"></Event>
    </div>
</template>

<script setup lang="ts">
    import type { PropType } from 'vue';
    import type { IEventViewModel } from '../../../typescripts/viewmodels/IEventViewModel';
    import Event from '../../Event.vue';

    import PinIcon from '../../icons/PinIcon.vue';

    const props = defineProps({
        events: {
            required: true,
            type: Object as PropType<IEventViewModel[]>
        }
    });
</script>

<style>
    .pinned_events {
        display: flex;
        align-items: center;
        gap: var(--space_md_clamped);
    }

    .pinned_events_container {
        margin-top: var(--space_md_clamped);
        display: flex;
        gap: var(--space_lg_clamped);
        flex-wrap: wrap;
        max-width: 100%;
        justify-content: center;
    }

    .pin_icon {
        fill: var(--primary_color);
        height: var(--font_h4_size_clamped);
        width: var(--font_h4_size_clamped);
    }
</style>