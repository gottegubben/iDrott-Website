<template>
    <BasicContainer>
        <ContentContainer class="flex_column center_vertical">
            <img alt=""
            srcset="
            /images/pages/about/GroupPresentation_Small.jpg 500w,
            /images/pages/about/GroupPresentation_Medium.jpg 700w,
            /images/pages/about/GroupPresentation_Large.jpg 1200w"
            sizes="90%">
            <h6 class="font_color_primary font_weight_medium">We move faster than your morning alarm snooze, have better teamwork than your group chat, and break more sweat than your phone after a full day of scrolling. Whether we’re training, competing, or just finding new ways to avoid leg day, we do it together.</h6>
        </ContentContainer>
    </BasicContainer>
</template>

<script setup lang="ts">
    import BasicContainer from '../../containers/BasicContainer.vue';
    import ContentContainer from '../../containers/ContentContainer.vue';
</script>

<style scoped>
    .content_container {
        padding: calc(var(--space_xxl_clamped) * 2) 0;
    }

    h6 {
        text-align: center;
        max-width: 60%;
        margin: var(--space_xl_clamped) 0;
    }

    img {
        width: 90%;
    }

    @media (max-width: 640px) {
        h6 {
            text-align: center;
            max-width: 90%;
            margin: var(--space_xl_clamped) 0;
        }
    }
</style>