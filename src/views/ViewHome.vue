<template>
    <div id="img-container">
        <img id="start" src="../assets/images/iDrott-homepage.jfif" alt="homepage-image">
        <div id="img-shadow">

        </div>
    </div>
</template>

<style scoped>
    div#img-container {
        position: relative;

        width: 100%;
        height: calc(100dvh - var(--header-height)); /* The viewport height minus the header will be the desired height of the image container. */

        /* There should be a max size where the image doesn't have to scale. At least the height because imagine a super high cropped image... */
        max-height: none;
        max-width: none;
    }
    img#start {
        width: 100%;
        height: 100%;

        object-fit: cover;

        display: block;
    }
    div#img-shadow {
        position: absolute;
        bottom: 0;
        height: 50%;
        width: 100% ;
        background-image: linear-gradient(to top, var(--color30), hsla(0, 0%, 0%, 0));
    }
</style>