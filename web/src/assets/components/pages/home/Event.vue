<template>
    <BasicContainer>
        <ContentContainer>
            <h1 class="font_color_primary font_weight_medium">Events</h1>
            <p class="font_color_primary">Through out the year there will be events taking place hosted
                by us so keep an eye out! Here are some upcoming events...</p>
            <div style="height: 200px;">
                
            </div>
            <p class="font_color_primary">To read about all upcoming events, check the Event page!</p>
        </ContentContainer>
    </BasicContainer>
</template>

<script setup lang="ts">
    import BasicContainer from '../../containers/BasicContainer.vue';
    import ContentContainer from '../../containers/ContentContainer.vue';
</script>

<style scoped>
    .content_container {
        display: flex;
        flex-direction: column;
        align-items: center;

        margin: var(--space_xxl_clamped) auto;
    }

    .content_container > p:nth-child(2) {
        margin-top: var(--space_xs_clamped);
    }

    p {
        text-align: center;
        max-width: 40em;
    }
</style>