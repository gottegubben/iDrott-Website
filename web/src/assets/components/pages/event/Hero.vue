<template>
    <BasicContainer>
        <ContentContainer class="center_vertical flex_column">
            <h1 class="font_weight_bold">Events</h1>
            <h6>All the events hosted by iDrott are displayed below!</h6>
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

        background: linear-gradient(0deg, var(--overlay_color), var(--overlay_color)), url(/images/pages/event/Landing_Hero_Large_48_13.jpg);
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;

        width: 100%;
        height: max-content;
        padding-bottom: var(--space_xl_clamped);

        z-index: 2;
        box-shadow: var(--shadow_variant_1);
    }

    @media (max-width: 1280px) {
        .basic_container {
            background: linear-gradient(0deg, var(--overlay_color), var(--overlay_color)), url(/images/pages/event/Landing_Hero_Medium_48_13.jpg);
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
        }
    }

    @media (max-width: 640px) {
        .basic_container {
            background: linear-gradient(0deg, var(--overlay_color), var(--overlay_color)), url(/images/pages/event/Landing_Hero_Small_48_13.jpg);
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
        }    
    }

    h6 {
        margin-top: var(--space_xs_clamped);
        text-align: center;
    }

    h1 {
        margin-top: var(--space_xs_clamped);
    }
</style>