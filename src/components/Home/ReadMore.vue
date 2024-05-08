<script setup lang="ts">
    import CardLink from './CardLink.vue';

    const cardLinks = [
        {
            text: "Meet the board!",
            imgSrc: ""
        },
        {
            text: "Test number two!",
            imgSrc: ""
        },
        { 
            text: "Test nmr three!",
            imgSrc: ""
        }
    ];
</script>

<template>
    <div id="read-more-container">
        <div class="content-container">
            <h2>More <span>sports</span> related topics</h2>
            <div id="card-container">
                <CardLink v-for="cards in cardLinks"></CardLink>
            </div>
        </div>
    </div>
</template>

<style scoped>
    div.content-container {
        margin-top: var(--space-lg);

        display: flex;
        align-items: center;

        flex-direction: column;
    }

    span {
        color: var(--color10);
    }

    div#read-more-container {
        width: 100%;
        display: flex;
        justify-content: center;
    }

    div#card-container {  
        margin-top: var(--space-md);
        margin-bottom: var(--space-lg);

        display: flex;
        flex-direction: row;
        gap: var(--space-lg);
    }
</style>