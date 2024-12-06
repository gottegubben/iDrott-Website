<template>
    <div id="footer_base">
        <BaseLayout>
            <div id="footer_container">
                <div id="logo">
                    <IdrottTextLogo id="idrott_text_logo"></IdrottTextLogo>
                </div>
                <div id="line"></div>
                <div id="other">
                    <div id="logo_container">
                        <div v-for="i in 3" style="width: 32px; height: 32px;"></div>
                    </div>
                    <div id="developer_note">
                        <p style="font-weight: bold">Developed by</p>
                        <p>Lukas Söderberg</p>
                    </div>
                    <div id="idrott_text">
                        <p style="font-weight: bold;">Idrott 2024</p>
                    </div>
                </div>
            </div>
        </BaseLayout>
    </div>
</template>

<script setup lang="ts">
    import BaseLayout from './BaseLayout.vue';
    import IdrottTextLogo from './IdrottTextLogo.vue';
</script>

<style scoped>
    #footer_base {
        width: 100%; 

        background-color: var(--tertiary_color);

        padding-top: var(--space_xl_clamped);
        padding-bottom: var(--space_xl_clamped);
    }

    #line {
        width: 100%;
        height: 2px;

        background-color: var(--secondary_color_1);

        margin-top: var(--space_md_clamped);
        margin-bottom: var(--space_md_clamped);
    }

    #footer_container, p {
        fill: var(--secondary_color_1);
        color: var(--secondary_color_1);
    }

    #idrott_text_logo {
        height: var(--font_h5_size_clamped);
    }

    #other {
        display: grid; 
        grid-template-columns: 1fr 1fr 1fr;
    }

    #logo_container {
        display: flex; 
        flex-direction: row;
    }

    #developer_note {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    #idrott_text {
        display: flex;
        justify-content: end;
    }
</style>