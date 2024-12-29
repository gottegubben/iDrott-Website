<template>
    <div class="event">
        <div class="event_information_container">
            <div v-if="props.showDate" class="event_information_date">
                <p class="font_weight_bold font_color_primary">{{ props.eventViewModel.Date.Month }}</p>
                <p class="font_color_primary">{{ props.eventViewModel.Date.Day }}</p>
            </div>
            <div class="event_information_info">
                <div>
                    <p class="font_weight_bold font_color_primary">{{ props.eventViewModel.Title }}</p>
                    <p class="font_color_primary font_small">{{ props.eventViewModel.Date.StartTime }} - {{ props.eventViewModel.Date.EndTime }}</p>
                </div>
                <p class="font_color_primary font_small">{{ props.eventViewModel.Description }}</p>
            </div>
        </div>
        <img :src="props.eventViewModel.ImageUrl" alt="">
        <div>
            <MyButton title="Learn more" :button-style="ButtonStyle.variant_2"></MyButton>
        </div>
    </div>
</template>

<script setup lang="ts">
    import type { PropType } from 'vue';
    import { defineProps } from 'vue';

    import { ButtonStyle } from '../typescripts/other/ButtonStyle';
    import type { EventViewModel } from '../typescripts/ViewModel/EventViewModel';
    import MyButton from './MyButton.vue';

    const props = defineProps({
        eventViewModel: {
            required: true,
            type: Object as PropType<EventViewModel>
        },
        showDate: {
            required: false,
            default: true,
            type: Object as PropType<boolean>
        }
    });
</script>

<style>
    .event {
        width: 100%;

        background-image: radial-gradient(circle at center, var(--tertiary_color) 0, transparent 70%);
        aspect-ratio: 1 / 1;

        display: flex;
        flex-direction: column;
        
        justify-content: center;
        gap: var(--space_md_clamped);
    }

    .event_information_container {
        display: flex;
        justify-content: space-between;
    }

    .event_information_container > .event_information_date {
        aspect-ratio: 1 / 1;

        border: black solid 2px;
        border-radius: 5px;

        width: 70px;
        height: 70px;

        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    .event_information_container > .event_information_info {
        margin-left: var(--space_md_clamped);

        display: flex;
        flex-direction: column;
        justify-content: space-between;
        flex-grow: 1;
    }

    .event_information_info > div {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .event_information_info > p {
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
        text-overflow: ellipsis;
        overflow: hidden;
        height: 5em;
    }

    .event > img {
        background-size: contain;

        aspect-ratio: 16 / 9;
        width: 100%;
    }
</style>