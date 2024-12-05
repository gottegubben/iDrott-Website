<template>
    <TintedBackground background-url="/public/temporary/images/TheTeamBackground.png" style="width: 100%; height: calc(100vh - 76px);">
        <BaseLayout>
            <div style="display: flex; width: 100%; flex-direction: column; align-items: center;">
                <h1 style="font-family: inter; font-size: 4.5em; color: var(--secondary_color); font-weight: bold; margin-bottom: 0;">The team</h1>
                <p style="font-family: inter; font-size: 1.5em; color: var(--secondary_color); font-weight: 100; width: 70%;">A diverse and dedicated group of professionals united by a shared passion for excellence and innovation with a blend of unique talents.</p>
                <img src="/public/temporary/images/TheTeam.png" style="width: 100%;" alt="">
            </div>
        </BaseLayout>
    </TintedBackground>
    <div style="margin-top: 50px;">
        <BaseLayout>
            <MemberContainer></MemberContainer>
        </BaseLayout>
    </div>
</template>

<script setup lang="ts">
    import BaseLayout from '../assets/components/BaseLayout.vue';

    import MemberContainer from '../assets/components/about/MemberContainer.vue';

    import TintedBackground from '../assets/components/TintedBackground.vue';
</script>