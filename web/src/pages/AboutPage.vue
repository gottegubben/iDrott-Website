<template>
    <TintedBackground background-url="/public/temporary/images/TheTeamBackground.png" style="width: 100%; height: calc(100vh - 76px); box-shadow: var(--shadow_variant_1);">
        <BaseLayout>
            <div id="content_container">
                <h1 id="main_title">The team</h1>
                <h6 id="description_text" style="width: 65%;">A diverse and dedicated group of professionals united by a shared passion for excellence and innovation with a blend of unique talents.</h6>
                <div id="image" style="background-image: url(/public/temporary/images/TheTeam.png);"></div>
            </div>
        </BaseLayout>
    </TintedBackground>
    <div style="margin-top: 50px;">
        <BaseLayout>
            <MemberContainer></MemberContainer>
        </BaseLayout>
    </div>
    <Footer></Footer>
</template>

<script setup lang="ts">
    import BaseLayout from '../assets/components/BaseLayout.vue';

    import MemberContainer from '../assets/components/about/MemberContainer.vue';

    import TintedBackground from '../assets/components/TintedBackground.vue';
    import Footer from '../assets/components/Footer.vue';
</script>

<style scoped>
    #main_title {
        font-weight: bold;
        margin-top: var(--space_xl_clamped);
    }

    #image {
        width: 100%;
        flex-grow: 1;
        
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;

        margin-top: var(--space_xl_clamped);
        margin-bottom: var(--space_xxl_clamped);
    }

    #content_container {
        width: 100%;
        height: inherit;

        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>