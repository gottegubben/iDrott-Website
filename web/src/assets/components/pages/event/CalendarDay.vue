<template>
    <div class="calendar_day">
        <p>{{ getDate }}</p>
        <div v-if="events.length < maxEventsBeforeOverflow" v-for="event in events" class="calendar_day_event">
            <p>{{ getTitle(event.title) }}</p>
        </div>
        <div v-if="!(events.length < maxEventsBeforeOverflow)" class="calendar_day_overflow">
            <p>+{{ maxEventsBeforeOverflow }} events...</p>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { computed, ref, type PropType } from 'vue';
    import type { IEventViewModel } from '../../../typescripts/viewmodels/IEventViewModel';

    const maxEventsBeforeOverflow = ref(4);
    const maxCharactersBeforeOverflow = ref(15);

    const props = defineProps({
        date: {
            required: true,
            type: Object as PropType<Date>
        },
        events: {
            required: false,
            type: Object as PropType<IEventViewModel[]>,
            default: []
        },
        displayWeekday: {
            required: false,
            default: false,
            type: Object as PropType<boolean>
        }
    });

    const getTitle = (title: string) => {
        if (title.length > maxCharactersBeforeOverflow.value) {
            var newTitle = title.slice(0, maxCharactersBeforeOverflow.value - 3);
            newTitle += "...";
            return newTitle;
        }
        return title;
    };

    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

    const getDate = computed(() => {
        if (props.displayWeekday) {
            return `${weekdays[props.date.getDay()]} ${props.date.getDate().toString()} ${months[props.date.getMonth()]}`;
        }
        return `${props.date.getDate().toString()} ${months[props.date.getMonth()]}`;
    });
</script>

<style>
    :root {
        --calendar_event_gap: var(--space_xs_clamped);
        --calendar_day_padding: var(--space_xs_clamped);
        --calendar_day_color: var(--tertiary_color);
        --calendar_day_event_color: var(--secondary_color_2)
    }

    .calendar_day {
        display: flex;
        flex-direction: column;
        gap: var(--calendar_event_gap);
        padding: var(--calendar_day_padding);

        aspect-ratio: 1 / 1;

        background-color: var(--calendar_day_event_color);
    }

    .calendar_day_event, .calendar_day_overflow {
        background-color: var(--calendar_day_color);

        flex-grow: 1;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>