<template>
    <TintedBackground background-url="/public/temporary/images/Home.png" style="width: 100%; height: calc(100vh - 101px);">
        <BaseLayout>
            <div id="container" style="display: flex; flex-direction: row; height: 100%">
                <div id="text" style="flex-basis: 0; flex-grow: 1; flex-shrink: 1; display: flex; flex-direction: column; justify-content: center; z-index: 1;">
                    <div>
                        <h3>We are</h3>
                        <h1 style="font-weight: bold;">TKDAT's Athletic Team</h1>
                        <h6>All ages and abilites are invitied to work with our talented and dedicated volunteer coaches.</h6>
                    </div>
                    <div style="margin-top: 30px;">
                        <button style="background-color: var(--tertiary_color); border: 0; border-radius: 5px; padding: 10px 20px 10px 20px; font-family: inter; font-size: 1em; margin-right: 35px; color: var(--secondary_color);">Get involved</button>
                        <a href="" style="text-decoration: none; color: var(--secondary_color); font-family: inter; font-size: 1em;">Watch our video</a>
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
</script>