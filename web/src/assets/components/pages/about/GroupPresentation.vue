<template>
    <BasicContainer>
        <ContentContainer class="flex_column center_vertical">
            <img src="/images/pages/about/GroupPresentation.png" alt="">
            <h6 class="font_color_primary font_weight_medium">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</h6>
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