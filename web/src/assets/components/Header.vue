<template>
    <div id="header-base">
        <BaseLayout>
            <div id="header-content">
                <div id="logo-container" style="height: inherit; height: inherit; display: flex; align-items: center;">
                    <IdrottTextLogo></IdrottTextLogo>
                </div>
                <div id="link-container" style="height: inherit; width: 500px; background-color: gray;">
                    <RouterLink to="/">TESTING</RouterLink>
                </div>
            </div>
        </BaseLayout>
    </div>
</template>

<script setup lang="ts">
import BaseLayout from './BaseLayout.vue';

import IdrottTextLogo from './IdrottTextLogo.vue';

    const testLinks = [
        {
            name: "Home",
            path: "/"
        },
        {
            name: "About",
            path: "/about"
        },
        {
            name: "Gallery",
            path: "/gallery"
        }
    ];
</script>

<style scoped>
    #header-base {
        width: 100%;
        height: 70px;
        background-color: var(--primary_color);
        position: relative;
    }

    #header-content {
        width: 100%;
        height: inherit;

        display: flex;
        justify-content: space-between;
    }
</style>