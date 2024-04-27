<script setup lang="ts">
    import iDrottTxtLogo from '@/assets/icons/iDrottTxtLogo.vue';
</script>

<template>
    <div id="footer-container">
        <div class="content-container">
            <iDrottTxtLogo width="5em" color="var(--color30-sh1)"></iDrottTxtLogo>
            <p>Designed by: Lukas Söderberg</p>
            <div id="social-media-links">

            </div>
        </div>
    </div>
</template>

<style scoped>
    div#footer-container {
        width: 100%;
        height: var(--footer-height);
        background-color: var(--color30);

        display: flex;
        justify-content: center;
    }
    .content-container {
        display: flex;
        align-items: center;
    }

    p {
        margin-left: var(--space-xxl);
        color: var(--color30-sh1);
        font-weight: var(--font-weight-m);
    }

    div#social-media-links {
        margin-left: auto;
    }
</style>