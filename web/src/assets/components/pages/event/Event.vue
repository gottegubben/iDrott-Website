<template>
    <ContentContainer>
        <PinnedEvents :events="events"></PinnedEvents>
        <Calendar></Calendar>
    </ContentContainer>
</template>

<script setup lang="ts">
    import type { IEventViewModel } from '../../../typescripts/viewmodels/IEventViewModel';
    import ContentContainer from '../../containers/ContentContainer.vue';

    import PinnedEvents from './PinnedEvents.vue';
    import Calendar from './Calendar.vue';

    const events: IEventViewModel[] = [
        {
            title: "Volleyball",
            description: "Join us for a great night with volleyball and fun activities.",
            startDate: new Date("2025-01-19T15:00"),
            endDate: new Date("2025-01-19T20:00"),
            imgUrl: "https://picsum.photos/450/300"
        },
        {
            title: "Dodgeball",
            description: "Never tried dodgeball before? Well give it a go!",
            startDate: new Date("2025-01-23T20:15"),
            endDate: new Date("2025-01-23T22:00"),
            imgUrl: "https://picsum.photos/450/300"
        },
        {
            title: "Pub quiz",
            description: "Come with us to the Data pub and participate in an exciting sports quiz.",
            startDate: new Date("2025-01-29T21:00"),
            endDate: new Date("2025-01-29T23:00"),
            imgUrl: "https://picsum.photos/450/300"
        }
    ];
</script>

<style scoped>
    .content_container {
        margin-top: var(--space_xl_clamped);
        display: flex;
        flex-direction: column;
    }
</style>