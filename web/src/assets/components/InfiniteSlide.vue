<template>
    <div class="infinite_slide_logos">
        <div class="infinite_slide_logos_slide" :style="sliderAnimation" v-for="i in props.timesToRepeat">
            <img src="/public/temporary/images/HubbauLogo.png" alt="">
            <img src="/public/temporary/images/LisebergLogo.png" alt="">
            <img src="/public/temporary/images/GoogleLogo.png" alt="">
        </div>
    </div>
</template>

<script setup lang="ts">
    import { defineProps, computed } from 'vue';
    import type { PropType } from 'vue';

    const props = defineProps({
        // The images will be sent in as a url!
        images: {
            required: true,
            type: Object as PropType<Array<string>>
        },
        // The amount of times to repeat the logo slide to make it seem infinite!
        timesToRepeat: {
            required: true,
            type: Object as PropType<number>
        }
    });

    const sliderAnimation = computed(() => {
        return {
            'display': 'inline-block;',
            'animation': `${props.images.length * 2}s slide infinite linear;`
        };
    });
</script>

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