<template>
    <BasicContainer>
        <ContentContainer class="flex_column center_vertical">
            <h1 class="font_color_primary font_weight_medium">Events</h1>
            <p class="font_color_primary">Through out the year there will be events taking place hosted
                by us so keep an eye out! Here are some upcoming events...</p>
            <div class="home_event_display">
                <Event :event-view-model="events[0]"></Event>
                <Event :event-view-model="events[0]"></Event>
                <Event :event-view-model="events[0]"></Event>
            </div>
            <p class="font_color_primary">To read about all upcoming events, check the Event page!</p>
        </ContentContainer>
    </BasicContainer>
</template>

<script setup lang="ts">
    import BasicContainer from '../../containers/BasicContainer.vue';
    import ContentContainer from '../../containers/ContentContainer.vue';

    /* Component specific components. */
    import Event from '../../Event.vue';
    import type { IEventViewModel } from '../../../typescripts/viewmodels/IEventViewModel';

    const events: IEventViewModel[] = [
        {
            title: "Test",
            description: "AAA",
            startDate: new Date("2025-01-13"),
            endDate: new Date("2025-01-14"),
            imgUrl: "/temporary/images/thumbnail-preview.jpg"
        }
    ];
</script>

<style scoped>
    .content_container {
        margin: var(--space_xxl_clamped) auto;
    }

    .content_container > p:nth-child(2) {
        margin-top: var(--space_xs_clamped);
    }

    p {
        text-align: center;
        max-width: 40em;
    }

    /* --- TESTING --- */

    .home_event_display {
        margin: 40px 0;
        width: 100%;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        align-items: center;
        gap: 20px;
    }

    @media (max-width: 1280px) {
        .home_event_display {
            grid-template-rows: auto;
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media (max-width: 640px) {
        .home_event_display {
            grid-template-rows: auto;
            grid-template-columns: repeat(1, 1fr);
        }
    }
</style>