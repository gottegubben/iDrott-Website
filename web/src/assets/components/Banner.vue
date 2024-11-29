<!--
    This element is the top banner on the page that displays a message.
-->

<template>
    <div :id="vueRouter.currentRoute.value.path == routes[0].path ? 'banner-base' : 'banner-base-collapsed'">
        <BaseLayout>
            <div id="banner-content" style="height: inherit;">
                <p>Every student at TKDAT is free to attend our practices! Keep your eyes out for upcoming events!</p>
            </div>
        </BaseLayout>
    </div>
</template>

<script setup lang="ts">
    import BaseLayout from './BaseLayout.vue';

    import { useRouter } from 'vue-router';

    const vueRouter = useRouter();

    const routes = vueRouter.getRoutes();

    console.log(vueRouter.currentRoute);
    console.log(vueRouter.currentRoute.value.path);
</script>

<style scoped>
    #banner-base, #banner-base-collapsed {
        transition: 0.3s;
    }

    #banner-base {
        height: 30px;
        background-color: var(--tertiary_color);
    }

    #banner-base-collapsed {
        height: 5px;
        background-color: var(--tertiary_color);
    }

    #banner-base-collapsed div p {
        display: none;
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