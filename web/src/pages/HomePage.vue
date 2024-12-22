<template>
    <Showpiece id="showpiece" style="z-index: 10; position: relative;"></Showpiece>

    <div style="margin: var(--space_xxl_clamped) 0;">
        <BaseLayout>
            <div id="title_container" style="display: flex; flex-direction: column; align-items: center; margin-bottom: var(--space_xxl_clamped);">
                <h1 style="color: black; font-weight: bold;">Events</h1>
                <h6 style="color: black;">Through out the year there will be events taking place by us. So keep an eye out!</h6>
            </div>
            <div id="events_container" style="display: flex; gap: 30px; justify-content: center;">
                <Event :event-view-model="events[0]"></Event>
            </div>
            <p style="color: black; margin-top: var(--space_lg_clamped); text-align: center;">To read about all upcoming events, check the Event page!</p>
        </BaseLayout>
    </div>

    <InfiniteSlide :images="['/public/temporary/images/HubbauLogo.png', '/public/temporary/images/LisebergLogo.png', '/public/temporary/images/GoogleLogo.png']" :times-to-repeat="4"></InfiniteSlide>

    <Footer style="position: relative;"></Footer>
</template>

<script setup lang="ts">
    import BaseLayout from '../assets/components/BaseLayout.vue';

    import Showpiece from '../assets/components/home/Showpiece.vue';

    import LoremIpsumTest from '../assets/components/LoremIpsumTest.vue';

    import Footer from '../assets/components/Footer.vue';

    import InfiniteSlide from '../assets/components/InfiniteSlide.vue';

    import MyButton from '../assets/components/MyButton.vue';

    import { ButtonStyle } from '../assets/typescripts/other/ButtonStyle';

    import Event from '../assets/components/Event.vue';

    import type { PropType } from 'vue';

    import type { EventViewModel } from '../assets/typescripts/ViewModel/EventViewmodel';

    const events: EventViewModel[] = [
        {
            Title: "Volleyball",
            Description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            Date: {
                Day: "18",
                Month: "April",
                Year: "2004",
                StartTime: "12:00",
                EndTime: "15:00"
            },
            ImageUrl: "\\temporary\\images\\TheTeam.png"
        }
    ];
</script>

<style scoped>
    #showpiece {
        box-shadow: var(--shadow_variant_1);
    }
</style>