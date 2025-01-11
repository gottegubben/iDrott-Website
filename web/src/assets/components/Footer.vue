<template>
    <BasicContainer>
        <ContentContainer>
            <div class="footer_top">
                <IdrottTextLogo></IdrottTextLogo>
            </div>
            <div class="footer_middle"></div>
            <div class="footer_bottom">
                <div class="footer_bottom_links"></div>
                <div class="footer_bottom_designer">
                    <div>
                        <p class="font_weight_medium">Designed by</p>
                        <p>Lukas Söderberg</p>
                    </div>
                </div>
                <div class="footer_bottom_tm">
                    <p class="font_weight_medium">Idrott 2024</p>
                </div>
            </div>
        </ContentContainer>
    </BasicContainer>
</template>

<script setup lang="ts">
    import BasicContainer from './containers/BasicContainer.vue';
    import ContentContainer from './containers/ContentContainer.vue';

    /* Component specific components. */
    import IdrottTextLogo from './IdrottTextLogo.vue';
</script>

<style>
    :root {
        --footer_element_color: hsl(var(--secondary_color_hue), var(--secondary_color_sat), calc(var(--secondary_color_lig)), 0.8);;
        --footer_idrott_logo_height: var(--font_h5_size_clamped);
    }
</style>

<style scoped>
    .basic_container {
        background-color: var(--tertiary_color);
    }

    .content_container {
        display: flex;
        flex-direction: column;
        gap: var(--space_xs_clamped);
        padding: var(--space_xl_clamped) 0;
    }

    .idrott_text_logo {
        height: var(--footer_idrott_logo_height);
        fill: var(--footer_element_color);

        z-index: 1000;
    }

    .footer_middle {
        width: 100%;
        height: 0.15rem;
        border-radius: 555555px;
        background-color: var(--footer_element_color);
    }

    .footer_bottom {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
    }

    .footer_bottom_designer > div {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .footer_bottom_tm > p {
        text-align: end;
    }
</style>