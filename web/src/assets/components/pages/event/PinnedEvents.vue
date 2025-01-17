<template>
    <Event v-for="event in events" :event-view-model="event"></Event>
</template>

<script setup lang="ts">
    import type { PropType } from 'vue';
    import type { IEventViewModel } from '../../../typescripts/viewmodels/IEventViewModel';
    import Event from '../../Event.vue';

    const props = defineProps({
        events: {
            required: true,
            type: Object as PropType<IEventViewModel[]>
        }
    });
</script>