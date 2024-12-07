<template>
    <div class="infinite_slide_logos">
        <div class="infinite_slide_logos_slide" v-for="i in 4">
            <img src="/public/temporary/images/HubbauLogo.png" alt="">
            <img src="/public/temporary/images/LisebergLogo.png" alt="">
            <img src="/public/temporary/images/GoogleLogo.png" alt="">
        </div>
    </div>
</template>

<style>
    @keyframes slide {
        from {
            transform: translateX(0);
        }
        to {
            transform: translate(-100%);
        }
    }

    .infinite_slide_logos {
        background-color: var(--secondary_color);
        
        padding: var(--space_md_clamped) 0;

        overflow-x: hidden;

        white-space: nowrap;
    }

    .infinite_slide_logos:hover .infinite_slide_logos_slide {
        animation-play-state: paused;
    }

    .infinite_slide_logos_slide {
        display: inline-block;

        animation: 7s slide infinite linear;
    }

    .infinite_slide_logos_slide img {
        height: var(--font_h4_size_clamped);

        margin: 0 var(--space_xl_clamped);
    }
</style>