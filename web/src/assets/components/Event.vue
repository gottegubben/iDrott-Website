<template>
    <div :style="style" class="event">
        <div class="event_date">
            <p class="font_weight_medium">{{ date }}</p>
            <svg viewBox="0 0 50 50" class="event_triangle">
                <polygon points="0 0, 0 50, 50 0"></polygon>
            </svg>
        </div>
        <div class="event_text">
            <div>
                <h5 class="font_weight_medium">{{ title }}</h5>
                <div></div>
                <p>{{ time }}</p>
            </div>
            <p>{{ description }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { computed, type PropType } from 'vue';
    import type { IEventViewModel } from '../typescripts/viewmodels/IEventViewModel';

    const titleMaxCharacterCount = 14;
    const descriptionMaxCharacterCount = 150;

    const title = computed(() => {
        if (props.eventViewModel.title.length > titleMaxCharacterCount && !props.allowTitleOverflow) {
            var newTitle = props.eventViewModel.title.slice(0, titleMaxCharacterCount - 3);
            newTitle += "...";

            return newTitle;
        }
        else return props.eventViewModel.title;
    });

    const description = computed(() => {
        if (props.eventViewModel.description.length > descriptionMaxCharacterCount && !props.allowDescriptionOverflow) {
            var newDescription = props.eventViewModel.description.slice(0, descriptionMaxCharacterCount - 3);
            newDescription += "...";

            return newDescription;
        }
        else return props.eventViewModel.description;
    });

    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const date = computed(() => {
        var newDate = "";

        newDate += props.eventViewModel.startDate.getDate().toString();

        if (props.useShortDateRepresentation) {
            newDate += ` ${months[props.eventViewModel.startDate.getMonth()]}`;
        }
        else {
            newDate += `/${props.eventViewModel.startDate.getMonth() + 1}-${props.eventViewModel.startDate.getFullYear()}`;
        }

        return newDate;
    });

    const time = computed(() => {
        var dayDiff   = props.eventViewModel.endDate.getDay() - props.eventViewModel.startDate.getDay();
        var yearDiff  = props.eventViewModel.endDate.getFullYear() - props.eventViewModel.startDate.getFullYear();

        var datePrefixStart: String[] = [];
        var datePrefixEnd: String[]  = [];

        if (dayDiff) {
            datePrefixStart.push(`${(props.eventViewModel.startDate.getDate())}/`);
            datePrefixEnd.push(`${(props.eventViewModel.endDate.getDate())}/`);

            datePrefixStart.push(`${(props.eventViewModel.startDate.getMonth() + 1)}`);
            datePrefixEnd.push(`${(props.eventViewModel.endDate.getMonth() + 1)}`);
        }

        if (yearDiff) {
            datePrefixStart.push(props.eventViewModel.startDate.getFullYear().toString());
            datePrefixEnd.push(props.eventViewModel.endDate.getFullYear().toString());
        }
        else {
            datePrefixStart.push(" ");
            datePrefixEnd.push(" ");
        }

        var startTime = "";
        var endTime   = "";

        for (let index = 0; index < datePrefixStart.length; index++) {
            var startElement = datePrefixStart[index];
            var endElement   = datePrefixEnd[index];

            startTime += startElement;
            endTime   += endElement;
        }

        startTime += `${String(props.eventViewModel.startDate.getHours()).padStart(2, '0')}:${String(props.eventViewModel.startDate.getMinutes()).padStart(2, '0')}`;
        endTime   += `${String(props.eventViewModel.endDate.getHours()).padStart(2, '0')}:${String(props.eventViewModel.endDate.getMinutes()).padStart(2, '0')}`;

        return `${startTime} - ${endTime}`;
    });

    const props = defineProps({
        eventViewModel: {
            required: true,
            type: Object as PropType<IEventViewModel>
        },

        allowTitleOverflow: {
            required: false,
            default: false,
            type: Boolean
        },

        allowDescriptionOverflow: {
            required: false,
            default: false,
            type: Boolean
        },

        useShortDateRepresentation: {
            required: false,
            default: true,
            type: Boolean
        }
    });

    const style = computed(() => {
        return {
            "background-image": `linear-gradient(var(--overlay_color_2), var(--overlay_color_2)), url(${props.eventViewModel.imgUrl})`
        };
    });
</script>

<style>
    .event:hover {
        transform: scale(1.1);
    }

    .event {
        transition: var(--animation_fast);

        aspect-ratio: 3 / 2;
        max-width: 370px;
        min-width: 250px;
        width: 100%;

        background-size: contain;
        background-repeat: no-repeat;

        display: flex;
        flex-direction: column;
        justify-content: space-between;

        /* Grid specific css. */
        place-self: center;
    }

    .event_date {
        position: relative;
    }

    .event_triangle {
        width: 24%;
        fill: var(--tertiary_color);
    }

    .event_date > p {
        transform: rotateZ(-45deg);

        font-size: 0.9em;

        position: absolute;
        text-align: center;
        padding-top: 3%;
        width: 24%;
        aspect-ratio: 1 / 1;
        z-index: 1;
    }

    .event_text {
        margin: var(--space_xs_clamped) var(--space_xs_clamped);
    }

    .event_text > p {
        margin-top: var(--space_xss_clamped);
        color: var(--secondary_color_2);
    }

    .event_text > div {
        display: flex;
        align-items: center;
        gap: var(--space_xs_clamped);
    }
    
    .event_text > div > div {
        width: 1px;
        height: var(--font_h5_size_clamped);
        background-color: var(--secondary_color);
    }
</style>