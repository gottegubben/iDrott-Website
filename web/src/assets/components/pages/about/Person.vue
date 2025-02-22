<template>
    <div class="person_container">
        <img src="/images/pages/about/Lukas.png" alt="">
        <div class="person_text_container">
            <div>
                <h4 class="font_color_primary">Ordförande</h4>
                <h6 class="font_color_primary">Duracellkanin - Lukas Söderberg</h6>
                <p class="font_color_primary">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    const props = defineProps({

    });
</script>

<style>
    .person_container {
        display: flex;
    }

    .person_text_container {

    }
</style>

<style scoped>
    img {
        aspect-ratio: 1 / 1;
        width: 300px;
    }
</style>