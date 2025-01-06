<template>
    <BasicContainer>
        <ContentContainer>
            <p v-for="i in 50">Hello</p>
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
    }
</style>