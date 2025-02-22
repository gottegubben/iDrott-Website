<template>
    <BasicContainer>
        <ContentContainer class="flex_column">
            <div class="presentation_container flex_column">
                <Person></Person>
                <Person></Person>
                <Person></Person>
            </div>
        </ContentContainer>
    </BasicContainer>
</template>

<script setup lang="ts">
    import BasicContainer from '../../containers/BasicContainer.vue';
    import ContentContainer from '../../containers/ContentContainer.vue';
    import Person from './Person.vue';
</script>

<style scoped>
    .presentation_container {
        gap: 50px;
        margin: 0 10%;
    }
</style>