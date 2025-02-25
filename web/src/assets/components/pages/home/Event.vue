<template>
    <BasicContainer>
        <ContentContainer class="flex_column center_vertical">
            <h2 class="font_color_primary font_weight_medium">Events</h2>
            <p class="font_color_primary">Through out the year there will be events taking place hosted
                by us so keep an eye out! Here are some upcoming events...</p>
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

    const router = useRouter();

    const events: IEventViewModel[] = [
        {
            title: "Workshop",
            description: "A professional conference bringing experts together for insightful talks, networking, and workshops, fostering innovation and collaboration in the industry.",
            startDate: new Date("2025-01-13T12:00"),
            endDate: new Date("2025-01-13T15:30"),
            imgUrl: "https://picsum.photos/450/300"
        }
    ];
</script>

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