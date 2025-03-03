<template>
    <BasicContainer>
        <ContentContainer class="flex_column center_vertical">
            <h2 class="font_color_primary font_weight_medium">Events</h2>
            <p class="font_color_primary">Through out the year there will be events taking place hosted
                by us so keep an eye out! Here are some upcoming events...</p>
            
            <div class="flex_row center_horizontal home_event_container">
                <Event :event-view-model="events[0]"></Event>
                <Event :event-view-model="events[0]"></Event>
                <Event :event-view-model="events[0]"></Event>
            </div>

            <p class="font_color_primary">To read about all upcoming events, check the Event page!</p>
            <BasicButton :button-style="ButtonStyle.variant_2" title="Read more" :onclick="() => router.push('/events')"></BasicButton>
        </ContentContainer>
    </BasicContainer>
</template>

<script setup lang="ts">
    import BasicContainer from '../../containers/BasicContainer.vue';
    import ContentContainer from '../../containers/ContentContainer.vue';
    import { useRouter } from 'vue-router';

    /* Component specific components. */
    import type { IEventViewModel } from '../../../typescripts/viewmodels/IEventViewModel';
    import BasicButton from '../../BasicButton.vue';
    import { ButtonStyle } from '../../../typescripts/other/ButtonStyle';
    import Event from '../../Event.vue';

    const router = useRouter();

    const events: IEventViewModel[] = [
        {
            id: "gjaiotjmg-falsf",
            title: "Workshop",
            description: "BLABLABLABLALBLABLALBLAB",
            startTime: "20:30",
            endTime: "23:00",
            startDate: {
                day: 5,
                month: "March",
                monthCut: "Mar",
                year: 2025
            },
            endDate: {
                day: 5,
                month: "March",
                monthCut: "Mar",
                year: 2025
            }
        }
    ];
</script>

<style>
    .home_event_container {
        gap: var(--space_xl_clamped);
        width: 100%;
    }
</style>

<style scoped>
    button {
        margin-top: var(--space_lg_clamped);
    }

    .content_container {
        margin: calc(var(--space_xxl_clamped) * 3) auto;
    }

    .content_container > p:nth-child(2) {
        margin-top: var(--space_xs_clamped);
    }

    p {
        text-align: center;
        max-width: 40em;
    }

    .home_event_display {
        margin: var(--space_xl_clamped) 0;
        width: 100%;

        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: var(--space_lg_clamped);
    }

    @media (max-width: 1280px) {
        .home_event_display {
            display: grid;
            grid-template-columns: repeat(1, 1fr);
        }
    }
</style>