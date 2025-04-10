<template>
    <BasicContainer>
        <ContentContainer>
            <div class="center_horizontal flex_column">
                <h3 class="font_weight_medium">We are</h3>
                <h1 class="font_weight_bold">TKDAT's</h1>
                <h1 class="font_weight_bold">Athletic Team</h1>
                <h6>TKDAT's Sports Committee is dedicated to bringing people together through exciting events that celebrate athleticism, teamwork, and community spirit.</h6>

                <div>
                    <BasicButton title="Learn more" :button-style="ButtonStyle.variant_2" class="font_p" @click="vueRouter.push('/about')"></BasicButton>
                    <p @click.self="youtubeVideoIsVisible = true; console.log(youtubeVideoIsVisible);" class="font_weight_medium">Watch our video</p>
                </div>
            </div>

            <div class="center_horizontal flex_column"></div>
        </ContentContainer>
    </BasicContainer>
    <YoutubeVideo v-if="youtubeVideoIsVisible" video-id="H_12WFvMqqE" @close_youtube_video="handleYoutubeVideoClose"></YoutubeVideo>
</template>

<script setup lang="ts">
    import BasicContainer from '../../containers/BasicContainer.vue';
    import ContentContainer from '../../containers/ContentContainer.vue';
    import BasicButton from '../../BasicButton.vue';
    import { ButtonStyle } from '../../../typescripts/other/ButtonStyle';

    /* Component specific components. */
    import YoutubeVideo from '../../YoutubeVideo.vue';

    import { ref } from 'vue';
    import { useRouter } from 'vue-router';

    const vueRouter = useRouter();

    const youtubeVideoIsVisible = ref(false);

    const handleYoutubeVideoClose = () => {
        youtubeVideoIsVisible.value = false;
    };
</script>

<style scoped>
    h1 {
            line-height: 1em;
    }

    .basic_container {
        padding-top: var(--header_height); /* Move down from the header! */

        background: linear-gradient(0deg, var(--overlay_color), var(--overlay_color)), url(/images/pages/home/Landing_Hero_Large_16_9.jpg);
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;

        width: 100%;
        min-height: 700px;
        height: 100vh;
        max-height: 1000px;

        z-index: 2;
        box-shadow: var(--shadow_variant_1);
    }

    .content_container {
        height: 100%;

        display: grid;
        grid-template-columns: 1.2fr 1fr;
        grid-template-rows: 1fr;
    }

    .content_container > div > div {
        display: flex;
        flex-direction: row;
        align-items: center;

        gap: var(--space_md_clamped);
        margin-top: var(--space_md_clamped);
    }

    .content_container > div > div > p:hover {
        cursor: pointer;
        text-decoration: underline;
        text-decoration-color: var(--tertiary_color);
        text-underline-offset: 4px;
    }

    .content_container > div:nth-child(2) {
        background-image: url(/images/other/logo/Idrott_Logo_Large_1_1.png);
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
    }

    h6 {
        margin-top: var(--space_xss_clamped);
    }

    @media (max-width: 1280px) {
        .basic_container {
            background: linear-gradient(0deg, var(--overlay_color), var(--overlay_color)), url(/images/pages/home/Landing_Hero_Medium_3_2.jpg);
            min-height: 600px;
            height: 100vh;
            max-height: 900px;

            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
        }

        .content_container > div:first-child {
            justify-content: flex-start;
            margin-bottom: var(--space_xxl_clamped);
        }

        .content_container > div:nth-child(2) {
            background-image: url(/images/other/logo/Idrott_Logo_Medium_1_1.png);
            grid-row: 1;
            margin-top: var(--space_xxl_clamped);
        }

        .content_container {
            height: 100%;

            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: 1fr auto;
            gap: var(--space_md_clamped);
        }
    }

    @media (max-width: 640px) {
        .basic_container {
            background: linear-gradient(0deg, var(--overlay_color), var(--overlay_color)), url(/images/pages/home/Landing_Hero_Small_2_3.jpg);
            min-height: 400px;
            height: 80vh;
            max-height: 600px;

            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
        }

        .content_container {
            height: 100%;

            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: 1.3fr 1fr;
        }

        .content_container > div:nth-child(2) {
            background-image: url(/images/other/logo/Idrott_Logo_Small_1_1.png);
        }
    }
</style>