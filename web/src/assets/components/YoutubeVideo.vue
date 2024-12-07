<template>
    <div class="youtube_video_container" @click.self="closeYoutubeVideo">
        <iframe class="youtube_video" :src="videoUrl" frameborder="0" allow="fullscreen"></iframe>
    </div>
</template>

<script setup lang="ts">
    import { defineProps, computed, defineEmits, onBeforeMount, onBeforeUnmount } from 'vue'
    import type { PropType } from 'vue';

    const props = defineProps({
        videoId: {
            required: true,
            type: Object as PropType<string>
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
    const mute     = props.mute ? 1 : 0;

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

<style>
    .youtube_video_container {
        z-index: 101;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.411);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .youtube_video {
        aspect-ratio: 2 / 1;
        width: 50%;
    }
</style>