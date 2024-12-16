<template>
    <YoutubeVideo v-if="videoIsVisible" video-id="dQw4w9WgXcQ" @close_youtube_video="handleVideoClose"></YoutubeVideo>
    <TintedBackground background-url="/public/temporary/images/Home.png" style="width: 100%; height: calc(100vh - 101px);">
        <BaseLayout>
            <div id="container" style="display: flex; flex-direction: row; height: 100%">
                <div id="text" style="flex-basis: 0; flex-grow: 1; flex-shrink: 1; display: flex; flex-direction: column; justify-content: center; z-index: 1;">
                    <div>
                        <h3 id="pre_main_text">We are</h3>
                        <h1 id="main_text" style="font-weight: bold;">TKDAT's Athletic Team</h1>
                        <h6>All ages and abilites are invitied to work with our talented and dedicated volunteer coaches.</h6>
                    </div>
                    <div id="button_container">
                        <MyButton title="Get involved" class="font_p" :button-style="ButtonStyle.variant_2"></MyButton>
                        <p id="video_text" @click.self="videoIsVisible = true">Watch our video</p>
                    </div>
                </div>
                <div style="display: flex; flex-grow: 1;">
                    <IdrottLogo style="transform: scale(1.1) translateX(calc((1 - 1.1) * 50%))"></IdrottLogo>
                </div>
            </div>
        </BaseLayout>
    </TintedBackground>
</template>

<script setup lang="ts">
    import TintedBackground from '../TintedBackground.vue';
    import BaseLayout from '../BaseLayout.vue';
    import IdrottLogo from '../IdrottLogo.vue';
    import MyButton from '../MyButton.vue';
    import YoutubeVideo from '../YoutubeVideo.vue';
    import { ButtonStyle } from '../../typescripts/other/ButtonStyle';

    import { ref } from 'vue';

    const videoIsVisible = ref(false);

    function handleVideoClose() {
        videoIsVisible.value = false;
    };
</script>

<style scoped>
    #main_text {
        line-height: 0.9em;
        margin-bottom: var(--space_xs_clamped);
    }

    #button_container {
        margin-top: var(--space_lg_clamped);

        display: flex;
        flex-direction: row;
        align-items: center;
        gap: var(--space_md_clamped);
    }

    #video_text:hover {
        cursor: pointer;
        text-decoration: underline;
        text-decoration-color: var(--tertiary_color);
        text-underline-offset: 4px;
    }
</style>