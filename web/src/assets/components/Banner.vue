<template>
    <div id="banner-base">
        <BaseLayout>
            <div id="banner-content" style="height: inherit;">
                <p>Every student at TKDAT is free to attend our practices! Keep your eyes out for upcoming events!</p>
            </div>
        </BaseLayout>
    </div>
</template>

<script setup lang="ts">
    import BaseLayout from './BaseLayout.vue';
</script>

<style scoped>
    #banner-base {
        height: 30px;
        background-color: var(--tertiary_color);
    }

    #banner-content {
        display: flex;
        justify-content: center;
        align-items: center;

        width: 100%;
    }

    p {
        font-size: .6em;
        font-weight: 600;
        color: var(--secondary_color);
        margin: 0;
    }
</style>