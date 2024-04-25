<template>
    <img id="start" src="../assets/images/iDrott-homepage.jfif" alt="homepage-image">
</template>

<style scoped>
    img#start {
        display: block;

        width: 100%;
        height: calc(100dvh - var(--header-height)); /* The viewport height minus the header will be the desired size of the image. */
        object-fit: cover;

        padding: 0;
        margin: 0;
    }
</style>