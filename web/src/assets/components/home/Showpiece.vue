<template>
    <TintedBackground background-url="/public/temporary/images/Home.png" style="width: 100%; height: calc(100vh - 101px);">
        <BaseLayout>
            <div id="container" style="display: flex; flex-direction: row; height: 100%">
                <div id="text" style="flex-basis: 0; flex-grow: 1; flex-shrink: 1; display: flex; flex-direction: column; justify-content: center; z-index: 1;">
                    <div>
                        <h3 id="pre_main_text">We are</h3>
                        <h1 id="main_text" style="font-weight: bold;">TKDAT's Athletic Team</h1>
                        <h6>All ages and abilites are invitied to work with our talented and dedicated volunteer coaches.</h6>
                    </div>
                    <div id="button_container">
                        <MyButton title="Get involved" class="font_p" :button-style="ButtonStyle.variant_2"></MyButton>
                        <a href="" class="font_p">Watch our video</a>
                    </div>
                </div>
                <IdrottLogo style="transform: scale(1.1) translateX(calc((1 - 1.1) * 50%))"></IdrottLogo>
            </div>
        </BaseLayout>
    </TintedBackground>
</template>

<script setup lang="ts">
    import TintedBackground from '../TintedBackground.vue';
    import BaseLayout from '../BaseLayout.vue';
    import IdrottLogo from '../IdrottLogo.vue';
    import MyButton from '../MyButton.vue';
    import { ButtonStyle } from '../../typescripts/other/ButtonStyle';
</script>

<style scoped>
    #main_text {
        line-height: 0.9em;
        margin-bottom: var(--space_xs_clamped);
    }

    #button_container {
        margin-top: var(--space_lg_clamped);

        display: flex;
        flex-direction: row;
        align-items: center;
        gap: var(--space_md_clamped);
    }
</style>