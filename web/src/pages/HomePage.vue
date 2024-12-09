<template>
    <Showpiece id="showpiece" style="z-index: 10; position: relative;"></Showpiece>

    <div style="margin: var(--space_xxl_clamped) 0;">
        <BaseLayout>
            <div id="title_container" style="display: flex; flex-direction: column; align-items: center; margin-bottom: var(--space_xxl_clamped);">
                <h1 style="color: black; font-weight: bold;">Events</h1>
                <h6 style="color: black;">Through out the year there will be events taking place by us. So keep an eye out!</h6>
            </div>
            <div id="events_container" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 30px;">
                <div id="event" v-for="i in 3" style="background-image: radial-gradient(circle at center, var(--tertiary_color) 0, transparent 70%); aspect-ratio: 1 / 1; display: flex; flex-direction: column; justify-content: space-between;">
                    <div id="top_container" style="display: flex; justify-content: space-between;">
                        <div id="date" style="aspect-ratio: 1 / 1; width: 70px; height: 70px; border: black solid 2px; border-radius: 5px; display: flex; align-items: center; justify-content: center; flex-direction: column;">
                            <p style="color: black; font-weight: bold;">April</p>
                            <p style="color: black;">13</p>
                        </div>
                        <div id="text_container" style="flex-grow: 1; margin-left: var(--space_md_clamped); display: flex; flex-direction: column; justify-content: space-between;">
                            <div id="top_text_container" style="display: flex; justify-content: space-between; align-items: center;">
                                <p style="color: black; font-weight: bold;">Volleyball</p>
                                <p class="font_small" style="color: black;">13:00 - 14:30</p>
                            </div>
                            <p class="font_small" style="color: black; text-overflow: ellipsis; overflow: hidden; width: 220px; display: -webkit-box; -webkit-line-clamp: 4; -webkit-box-orient: vertical; height: 5em;">Ladies and gentlemen, welcome to the Grand Autumn Harvest Festival! Tonight, we celebrate the season with delicious food, live music, and community spirit. Get ready for an evening of fun and laughter — enjoy the local artisans' market, taste our mouthwatering pumpkin pies at the bake-off, and dance under the stars to the rhythm of our talented local bands.</p>
                        </div>
                    </div>
                    <img style="width: 100%;" src="/public/temporary/images/TheTeamBackground.png" alt="">
                    <div>
                        <MyButton title="Learn more" :button-style="ButtonStyle.variant_2"></MyButton>
                    </div>
                </div>
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
</script>

<style scoped>
    #showpiece {
        box-shadow: var(--shadow_variant_1);
    }
</style>