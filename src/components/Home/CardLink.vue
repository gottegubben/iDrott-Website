<script setup lang="ts">
    const props = defineProps({
        text: {
            type: String
        },
        src: { //The source of the image. Relative offset.
            type: String,
            required: true
        },
        link: { //Where you will go when clicking on the component.
            type: String,
            default: "/"
        },
        overlayColor: {
            type: String,
            default: "var(--color10)"
        },
        opacity: {
            type: String,
            default: "30%"
        }
    });
</script>

<template>
    <div id="card">
        <img :src="props.src" alt="">
        <div id="img-overlay" :style="'background-color: color-mix(in srgb, ' + props.overlayColor + ' ' + props.opacity + ', #00000000)' + ';'">
            <div id="shadow">
                <h3>{{ props.text }}</h3>
            </div>
        </div>
    </div>
</template>

<style scoped> 
    h3 {
        margin: var(--space-sm);

        color: var(--color60);
    }

    img {
        object-fit: cover;

        width: inherit;
        height: inherit;
        min-width: 0;
        min-height: 0;
    }

    #img-overlay {
        position: absolute;
        top: 0;

        width: inherit;
        height: inherit;

        display: flex;
        align-items: flex-end;
    }

    #shadow {
        display: flex;
        align-items: flex-end;

        width: inherit;
        height: inherit;

        height: 50%;
        width: 100% ;

        background-image: linear-gradient(to top, var(--color30), hsla(0, 0%, 0%, 0));
    }

    #card {
        position: relative;
        width: 300px;
        height: 450px;

        transition: 0.5s ease;
    }

    #card:hover {
        cursor: pointer;
        
        transform: translateY(-5%);
    }
</style>