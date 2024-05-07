<script setup lang="ts">
    import Button from '../Button.vue';
</script>

<template>
    <div id="contact-container">
        <div class="content-container">
            <div id="contact-us">
                <h2>Any questions?</h2>
                <div id="btn-container">
                    <Button text="Contact us!" color="var(--color10)" colorHover="var(--color10-sh1)"></Button>
                </div>
            </div>
            <div id="team-image">
                <img src="../../assets/images/team-picture.png" alt="">
            </div>
        </div>
    </div>
</template>

<style scoped>
    h2 {
        margin-top: 0;
        color: var(--color60);
    }

    div#contact-container {
        display: flex;
        justify-content: center;

        width: 100%;

        background-color: var(--color30);
    }

    div.content-container {
        height: inherit;

        display: grid;
        grid-template-columns: 1fr 1fr;
    }

    div#contact-us {
        display: flex;
        flex-direction: column;
        
        justify-content: center;
    }
</style>