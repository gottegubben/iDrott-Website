<template>
    <div id="header-base">
        <BaseLayout>
            <div id="header-content">
                <div id="logo-container" style="height: inherit; height: inherit; display: flex; align-items: center;">
                    <IdrottTextLogo></IdrottTextLogo>
                </div>
                <div id="link-container" style="height: inherit; display: flex; align-items: center; gap: 30px;">
                    <RouterLink to="/"  class="nav_idle" active-class="nav_active">Home</RouterLink>
                    <RouterLink to="/about" class="nav_idle" active-class="nav_active">About</RouterLink>
                    <RouterLink to="/gallery"  class="nav_idle" active-class="nav_active">Gallery</RouterLink>
                </div>
            </div>
        </BaseLayout>
    </div>
</template>

<script setup lang="ts">
import BaseLayout from './BaseLayout.vue';

import IdrottTextLogo from './IdrottTextLogo.vue';
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

    .nav_idle {
        font-size: 1em;
        color: var(--secondary_color);
        font-family: inter;
        text-decoration: none;
    }
    .nav_idle:hover, .nav_active {
        font-size: 1em;
        color: var(--secondary_color);
        font-family: inter;
        text-decoration: underline;
    }
</style>