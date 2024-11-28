<template>
    <div id="header-base">
        <BaseLayout>
            <div id="header-content">
                <div id="logo-container" style="height: inherit; height: inherit; display: flex; align-items: center;">
                    <IdrottTextLogo></IdrottTextLogo>
                </div>
                <div id="link-container" style="height: inherit; width: 500px; background-color: gray;">
                    <RouterLink v-for="link in routes" to={{ link.path }}>{{ link.name }}</RouterLink>
                </div>
            </div>
        </BaseLayout>
    </div>
</template>

<script setup lang="ts">
    import { getCurrentInstance } from 'vue';

    const routes = getCurrentInstance()?.appContext.config.globalProperties.$routes;

    console.log(routes);

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
</style>