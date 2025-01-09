<template>
    <BasicContainer>
        <ContentContainer>
            <div class="center_horizontal flex_column">
                <h3 class="font_weight_medium">We are</h3>
                <h1 class="font_weight_bold">TKDAT's</h1>
                <h1 class="font_weight_bold">Athletic Team</h1>
                <h6>TKDAT's Sports Committee is dedicated to bringing people together through exciting events that celebrate athleticism, teamwork, and community spirit.</h6>
            </div>
            <div class="center_horizontal flex_column"></div>
        </ContentContainer>
    </BasicContainer>
</template>

<script setup lang="ts">
    import BasicContainer from '../../containers/BasicContainer.vue';
    import ContentContainer from '../../containers/ContentContainer.vue';
</script>

<style scoped>
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
    }

    .content_container {
        height: 100%;

        display: grid;
        grid-template-columns: 1.2fr 1fr;
        grid-template-rows: 1fr;
    }

    .content_container > div:nth-child(2) {
        background-image: url(/images/other/logo/Idrott_Logo_Large_1_1.png);
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
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
            min-height: 360px;
            height: 80vh;
            max-height: 480px;

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