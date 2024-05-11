<script setup lang="ts">
    import CardLink from './CardLink.vue';

    const cardLinks = [
        {
            text: "Meet HackeD Utd",
            src: "/src/assets/images/home/HackeUtd.png",
            link: "/board"
        },
        {
            text: "Sports at Chalmers",
            src: "/src/assets/images/home/SportsChalm.png",
            link: "/activities"
        },
        {
            text: "Meet the board",
            src: "/src/assets/images/home/MeetBoard.png",
            link: "/hackeutd"
        }
    ];
</script>

<template>
    <div id="read-more-container">
        <div class="content-container">
            <h2>More <span>sports</span> related topics</h2>
            <div id="card-container">
                <CardLink v-for="cards in cardLinks" :text="cards.text" :src="cards.src" :link="cards.link"></CardLink>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .content-container {
        margin-top: var(--space-lg);

        display: flex;
        align-items: center;

        flex-direction: column;
    }

    span {
        color: var(--color10);
    }

    #read-more-container {
        width: 100%;

        display: flex;
        justify-content: center;
    }

    #card-container {  
        margin-top: var(--space-md);
        margin-bottom: var(--space-xxl);

        display: flex;
        flex-direction: row;
        
        gap: var(--space-xxl); /* Fix the gaps such that it covers the whole content-container! */
    }
</style>