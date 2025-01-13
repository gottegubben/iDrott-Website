<template>
    <BasicContainer>
        <ContentContainer class="center_horizontal flex_column">
            <h3>Want to learn more about us?</h3>
            <BasicButton title="Read here" :button-style="ButtonStyle.variant_2" class="font_p" :onclick="redirect"></BasicButton>
        </ContentContainer>
    </BasicContainer>
</template>

<script setup lang="ts">
    import BasicContainer from '../../containers/BasicContainer.vue';
    import ContentContainer from '../../containers/ContentContainer.vue';
    import BasicButton from '../../BasicButton.vue';
    import { ButtonStyle } from '../../../typescripts/other/ButtonStyle';

    import { ref } from 'vue';
    import { useRouter } from 'vue-router';

    const vueRouter = useRouter();
    const routes    = vueRouter.options.routes;

    const redirect = () => {
        const route = routes.find((x) => x.name?.toString().toLowerCase().trim() == "about");
        vueRouter.push(route ? route.path : "/");
    };
</script>

<style scoped>
    .basic_container {
        background: linear-gradient(var(--secondary_color) 50%, var(--primary_color) 50%);
    }

    .content_container {
        border: 1px solid var(--secondary_color);
        height: 100%;
        border-radius: 1rem;

        padding: var(--space_xl_clamped) 0;
        padding-left: var(--space_xl_clamped);

        background: linear-gradient(90deg, var(--primary_color_1) calc(100% - 800px), transparent), url(/images/pages/home/About_Us_All_8_4.jpg);
        background-position: right;
        background-repeat: no-repeat;
    }

    h3 {
        margin-bottom: var(--space_xs_clamped);
    }

    @media (max-width: 1000px) {
        .content_container {
            background: linear-gradient(90deg, var(--overlay_color_1), var(--overlay_color_1)), url(/images/pages/home/About_Us_All_8_4.jpg);
            background-position: center;
            background-size: cover;
        }
    }
</style>