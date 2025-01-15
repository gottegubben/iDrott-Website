<template>
    <div :style="style" class="event">
        <div class="event_date">
            <p class="font_weight_medium">5 Jan</p>
            <svg viewBox="0 0 50 50" class="event_triangle">
                <polygon points="0 0, 0 50, 50 0"></polygon>
            </svg>
        </div>
        <div class="event_text">
            <div>
                <h5 class="font_weight_medium">Volleyball</h5>
            </div>
            <p>Welcome to the Coastal Cleanup Day, everyone! Today, we're rolling up our sleeves to make a real difference for our oceans and beaches.</p>
        </div>
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
</style>