<template>
    <BasicContainer>
        <ContentContainer class="flex_column center_vertical">
            <h2 class="font_color_primary font_weight_medium">Events</h2>
            <p class="font_color_primary">Through out the year there will be events taking place hosted
                by us so keep an eye out! Here are some upcoming events...</p>
            
            <div class="home_event_container">
                <Event v-for="event in events" :event-view-model="event"></Event>
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
    import BasicButton from '../../BasicButton.vue';
    import { ButtonStyle } from '../../../typescripts/other/ButtonStyle';
    import Event from '../../Event.vue';

    const router = useRouter();

    import { ref, onMounted } from 'vue';
    import type { IEventViewModel } from '../../../typescripts/viewmodels/IEventViewModel';

    const events = ref<IEventViewModel[]>([]);

    onMounted(() => {
    fetch("http://46.239.119.113:5555/events")
        .then(res => res.json())
        .then(data => {
        events.value = data;
        })
        .catch(err => console.error("Failed to fetch events:", err));
    });
</script>

<style>
    .home_event_container {
        gap: var(--space_xl_clamped);
        width: 100%;
        margin: var(--space_xxl_clamped) 0;
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

    .home_event_container {
        margin: var(--space_xl_clamped) 0;
        width: 100%;

        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }
</style>