<template>
    <FixedPageContainer>
        <ContentContainer>
            <IdrottTextLogo></IdrottTextLogo>

            <div>
                <RouterLink v-for="route in routes" :to="route.path" class="font_p link_idle" active-class="font_p link_active">{{ route.name }}</RouterLink>
            </div>
        </ContentContainer>
    </FixedPageContainer>
</template>

<script setup lang="ts">
    import FixedPageContainer from './containers/FixedPageContainer.vue';
    import ContentContainer from './containers/ContentContainer.vue';

    /* Component specific components! */
    import IdrottTextLogo from './IdrottTextLogo.vue';
    
    import { useRouter } from 'vue-router';

    const vueRouter = useRouter();
    const routes = vueRouter.options.routes;
</script>

<style>
    :root {
        --header_height: 60px;
        --header_background_color: none;
    }

    .link_idle:hover, .link_active {
        text-decoration: underline;
        text-decoration-color: var(--tertiary_color);
        text-underline-offset: 4px;
    }
</style>

<style scoped>
    .fixed_page_container {
        height: var(--header_height);

        background-color: var(--header_background_color);
    }

    .content_container {
        height: inherit;
        
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .idrott_text_logo {
        height: var(--font_h5_size_clamped);
    }
</style>