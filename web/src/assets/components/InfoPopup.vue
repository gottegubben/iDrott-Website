<template>
    <FixedPageContainer :onclick="closeInfopopupVideo">
        <div class="popup_container">
            <img v-if="props.imageUrl.length != 0" :src="props.imageUrl" alt="">
            <h4 class="font_weight_medium">{{ props.title }}</h4>
            <p>{{ props.description }}</p>
        </div>
    </FixedPageContainer>
</template>

<script setup lang="ts">
    import { onBeforeMount, onBeforeUnmount, type PropType } from 'vue';
    import FixedPageContainer from './containers/FixedPageContainer.vue';

    const props = defineProps({
        imageUrl: {
            required: false,
            default: "",
            type: Object as PropType<string>
        },
        title: {
            required: false,
            default: "",
            type: Object as PropType<string>
        },
        description: {
            required: false,
            default: "",
            type: Object as PropType<string>
        }
    });

    const emits = defineEmits(['close_infopopup']);

    function closeInfopopupVideo() {
        // Emit the event to the parent. The parent needs to be listening for this event!
        // Use the '@close_infopopup' attribute on the child from the parent.
        emits('close_infopopup');
    };

    onBeforeMount(() => {
        document.addEventListener('keydown', onEscapePressed);
    });

    onBeforeUnmount(() => {
        document.removeEventListener('keydown', onEscapePressed);
    });

    function onEscapePressed(e: KeyboardEvent) {
        if(e.key == "Escape") emits('close_infopopup');
    };
</script>

<style>
    .popup_container {
        background-color: var(--primary_color);

        max-width: 400px;
    }
</style>

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

    img {
        width: 100%;
        object-fit: cover;
    }

    p {
        color: var(--secondary_color_2);
    }

    h4, p {
        margin: var(--space_xs_clamped);
    }
</style>