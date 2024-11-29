<!--
    The header is the element containing the navigation for the website.
-->

<template>
    <div id="header-base">
        <BaseLayout>
            <div id="header-content">
                <div id="logo-container" style="height: inherit; display: flex; align-items: center;">
                    <IdrottTextLogo style="fill: var(--secondary_color);"></IdrottTextLogo>
                </div>
                <div id="link-container" style="height: inherit; display: flex; align-items: center; gap: 30px;">
                    <RouterLink v-for="route in routes" :to="route.path" class="link_idle" active-class="link_active">{{ route.name }}</RouterLink>
                    <button :onclick="() => { console.log('Clicked on contact-us button!'); }">Contact Us</button>
                </div>
            </div>
        </BaseLayout>
    </div>
</template>

<script setup lang="ts">
    import { useRouter } from 'vue-router';

    import BaseLayout from './BaseLayout.vue';
    import IdrottTextLogo from './IdrottTextLogo.vue';

    const vueRouter = useRouter();

    const routes = vueRouter.options.routes;
</script>

<style scoped>
    button {
        font-family: inter;
        font-size: 1em;
        color: var(--primary_color);
        background-color: var(--secondary_color);
        padding: 7px 15px 7px 15px;
        border-radius: 5px;
        border: 0;
    }
    button:hover {
        cursor: pointer;
        background-color: var(--secondary_color_1);
    }

    #header-base, #header-content {
        width: 100%;
        height: 70px;
    }

    #header-base {
        background-color: var(--primary_color);
        position: relative;
    }

    #header-content {
        display: flex;
        justify-content: space-between;
    }

    .link_idle, .link_idle:hover, .nav_active {
        font-size: 1em;
        color: var(--secondary_color);
        font-family: inter;
        text-decoration: none;
    }

    .link_idle:hover, .link_active {
        text-decoration: underline;
        text-decoration-color: var(--tertiary_color);
        text-underline-offset: 4px;
    }
</style>