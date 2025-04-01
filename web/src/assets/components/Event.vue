<template>
    <div class="event_container">
        <div class="event_image">
            <div class="event_image_date">
                <!-- THE DATE HERE -->
                <p class="font_weight_medium">{{ props.eventViewModel.startDate.day }}</p>
                <p class="font_weight_medium">{{ props.eventViewModel.startDate.monthCut.toUpperCase() }}</p>
            </div>
        </div>

        <div class="event_info">
            <!-- TITLE -->
            <h6 class="font_color_primary font_weight_medium">{{ props.eventViewModel.title }}</h6>

            <div class="event_info_details">
                <!-- DAY OF WEEK, MONTH, DATE, YEAR -->
                <span><FontAwesomeIcon class="font_awesome_icon font_p" icon="calendar"></FontAwesomeIcon></span>
                <p class="font_color_primary">Saturday, March 8, 2025</p>

                <!-- TIME FROM & TO -->
                <span><FontAwesomeIcon class="font_awesome_icon font_p" icon="clock"></FontAwesomeIcon></span>
                <p class="font_color_primary">{{ props.eventViewModel.startTime }} - {{ props.eventViewModel.endTime }}</p>
            </div>

            <!-- DESCRIPTION -->
            <p class="font_color_primary event_info_details_desc">{{ props.eventViewModel.description }}</p>
        </div>
    </div> 
</template>

<script setup lang="ts">
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
    import type { PropType } from 'vue';
    import type { IEventViewModel } from '../typescripts/viewmodels/IEventViewModel';

    const props = defineProps({
        eventViewModel: {
            required: true,
            type: Object as PropType<IEventViewModel>
        }
    });
</script>

<style>
    .event_info {
        margin: 1em;
    }

    .event_info_details {
        display: grid;
        grid-template-columns: 1.5em 1fr;
        margin-bottom: var(--space_xs_clamped);
        row-gap: 0.3em;
    }

    .event_container {
        width: 336px;
        background-color: var(--secondary_color_1);
        border-radius: 0.3rem;
        max-width: 21em;
        transition: var(--animation_fast);
    }

    .event_container:hover {
        transform: scale(1.05);
    }

    .event_image {
        display: flex;
        padding: 1em;
        background-image: url(/images/pages/home/Landing_Hero_Small_2_3.jpg);
        border-top-left-radius: 0.3rem;
        border-top-right-radius: 0.3rem;
        padding-bottom: 5em;
    }

    .event_image_date {        
        padding: 1em;
        background-color: rgb(63, 60, 60);
        border-radius: 0.3em;
        aspect-ratio: 1 / 1;

        height: calc(1em * 4);

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .event_image_date > p {
        text-align: center;
    }

    .event_info_details_desc {
        display: block;  /* Ensures it's a block-level element */
        width: 100%;     /* Makes it take up the full width of its container */
        white-space: normal; /* Allow text to wrap naturally */
        overflow: visible; /* Allow overflow to be visible */
        word-wrap: break-word; /* Break long words when necessary */
    }
</style>

<style scoped>
    .font_awesome_icon {
        color: var(--primary_color);
    }

    h6 {
        margin-bottom: var(--space_xs_clamped);
    }

    span {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>