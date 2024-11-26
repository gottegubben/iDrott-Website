<template>
    <div id="header-base">
        <BaseLayout>
            <div id="header-content">
                <div id="logo-container" style="height: inherit; display: flex; align-items: center;">
                    <IdrottTextLogo style="fill: var(--secondary_color);"></IdrottTextLogo>
                </div>
                <div id="link-container" style="height: inherit; display: flex; align-items: center; gap: 30px;">
                    <RouterLink v-for="route in router.options.routes" :to="route.path" class="link_idle" active-class="link_active">{{ route.name }}</RouterLink>
                </div>
            </div>
        </BaseLayout>
    </div>
</template>

<script setup lang="ts">
    import BaseLayout from './BaseLayout.vue';

    import IdrottTextLogo from './IdrottTextLogo.vue';

    import { useRouter } from 'vue-router';

    const router = useRouter();
</script>

<style scoped>
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
    }
</style>