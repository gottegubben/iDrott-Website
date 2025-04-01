<template>
    <div class="person_container">
        <img :src="props.person.img" alt="">
        <div class="person_text_container">
            <h4 class="font_color_primary font_weight_bold">{{ props.person.role }}</h4>
            <h6 class="font_color_primary"><span class="font_color_primary font_weight_medium">{{ props.person.post }}</span> - {{ props.person.name }}</h6>

            <div>
                <span><FontAwesomeIcon class="font_awesome_icon font_h6" icon="envelope"></FontAwesomeIcon></span>
                <div class="center_vertical"><p class="font_color_primary">{{ props.person.mail }}</p></div>
                <span><FontAwesomeIcon class="font_awesome_icon font_h6" icon="dumbbell"></FontAwesomeIcon></span>
                <div class="center_vertical"><p class="font_color_primary">{{ props.person.favSport }}</p></div>
                <span><FontAwesomeIcon class="font_awesome_icon font_h6" icon="music"></FontAwesomeIcon></span>
                <div class="center_vertical"><p class="font_color_primary">{{ props.person.favSong }}</p></div>
                <span><FontAwesomeIcon class="font_awesome_icon font_h6" icon="gear"></FontAwesomeIcon></span>
                <div class="center_vertical"><p class="font_color_primary">{{ props.person.task }}</p></div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { type IPersonViewModel } from '../../../typescripts/viewmodels/IPersonViewModel';
    import type { PropType } from 'vue';
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

    const props = defineProps({
        person: {
            required: true,
            type: Object as PropType<IPersonViewModel>
        }
    });
</script>

<style>
    .person_container {
        display: flex;
        transition: var(--animation_fast);
        flex-grow: 1;
    }

    .person_container:hover {
        transform: scale(1.05);
    }

    .person_text_container {
        background-color: var(--secondary_color_1);
        padding: var(--space_xl_clamped);
        width: 100%;
    }

    .person_text_container > div {
        border-top: 2px solid var(--primary_color);
        padding-top: var(--space_md_clamped);

        display: grid;
        grid-template-columns: 1.5em 1fr;
        gap: var(--space_xs_clamped);
    }
</style>

<style scoped>
    span {
        text-align: center;
    }

    .font_awesome_icon {
        color: var(--primary_color);
    }

    img {
        aspect-ratio: 1 / 1;
        width: 300px;
        object-fit: cover;
    }

    h6 {
        margin-bottom: var(--space_xs_clamped);
    }

    @media (max-width: 1080px) {
        img {
            width: 270px;
        }
    }

    @media (max-width: 840px) {
        img {
            width: 200px;
        }

        .person_text_container {
            background-color: var(--secondary_color_1);
            padding: var(--space_md_clamped);
            width: 100%;
        }
    }

    @media (max-width: 640px) {
        img {
            width: 100px;
        }
    }

    @media (max-width: 400px) {
        .person_container {
            display: flex;
            flex-direction: column;
        }

        img {
            width: 100%;
        }
    }
</style>