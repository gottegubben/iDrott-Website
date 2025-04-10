<template>
    <FixedPageContainer @click.self="closeYoutubeVideo">
        <iframe :src="videoUrl" frameborder="0" allow="fullscreen"></iframe>
    </FixedPageContainer>
</template>

<script setup lang="ts">
    import FixedPageContainer from './containers/FixedPageContainer.vue';
    import { computed, onBeforeMount, onBeforeUnmount } from 'vue'
    import type { PropType } from 'vue';

    const props = defineProps({
        videoId: {
            required: true,
            type: Object as PropType<String>
        },
        autoplay: {
            required: false,
            default: true,
            type: Object as PropType<boolean>
        },
        mute: {
            required: false,
            default: true,
            type: Object as PropType<boolean>
        }
    });

    const autoplay = props.autoplay ? 1 : 0;
    const mute     = props.mute     ? 1 : 0;

    const videoUrl = computed(() => {
        return `https://www.youtube.com/embed/${props.videoId}?mute=${mute}&autoplay=${autoplay}`;
    });

    const emits = defineEmits(['close_youtube_video']);

    function closeYoutubeVideo() {
        // Emit the event to the parent. The parent needs to be listening for this event!
        // Use the '@close_youtube_video' attribute on the child from the parent.
        emits('close_youtube_video');
    };

    onBeforeMount(() => {
        document.addEventListener('keydown', onEscapePressed);
    });

    onBeforeUnmount(() => {
        document.removeEventListener('keydown', onEscapePressed);
    });

    function onEscapePressed(e: KeyboardEvent) {
        if(e.key == "Escape") emits('close_youtube_video');
    };
</script>

<style scoped>
    .fixed_page_container {
        z-index: 500;

        top: 0;
        left: 0;
        width: 100%;
        height: 100%;

        background-color: var(--overlay_color);

        display: flex;
        justify-content: center;
        align-items: center;
    }

    iframe {
        aspect-ratio: 2 / 1;
        width: 50%;
    }

    @media (max-width: 1280px) {
        iframe {
            width: 70%;
        }
    }

    @media (max-width: 640px) {
        iframe {
            width: 90%;
        }
    }
</style>