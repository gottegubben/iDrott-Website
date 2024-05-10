<script setup lang="ts">
    import Button from '../Button.vue';
</script>

<template>
    <div id="info-container">
        <div class="content-container-1">
            <div id="grid">
                <div></div>
                <div id="text-container">
                    <h1>We host <span id="practice">practice</span> sessions!</h1>
                    <h3>At least once a week, iDrott hosts a practice session for all students currently enrolled in the Computer Science program at Chalmers. The types of sessions themselves can range from a variety of different sports such as volleyball, basketball and table tennis.<br><br>To read more about upcoming events and activities, please refer yourself to the activities page!</h3>
                    <div id="btn-container">
                        <Button color="var(--color10)" colorHover="var(--color10-sh1)" text="Read more!" textSize="var(--font-size-s)" :boxshadow="true"></Button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    button {
        margin-bottom: var(--space-xl);
    }

    #info-container {
        position: relative;
        display: flex;
        justify-content: center;
        background-color: var(--color30);
    }

    .content-container-1 {
        /* If you want to change the color of the main page (--color30), then you have to manualy change the climbing.svg files fill attribute to that color. */
        background: var(--color60) url("../../assets/images/home/climbing.svg") no-repeat center top;
        background-size: cover;
    }

    .content-container-1, div#grid {
        height: inherit;
    }

    #grid {
        margin-top: var(--space-xxl);
        display: grid;
        grid-template-columns: 1fr 1fr;
    }

    #text-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    h3 {
        margin-top: 0;
        margin-bottom: var(--space-lg);
        font-weight: var(--font-weight-s);
    }

    #practice {
        color: var(--color10);
    }
</style>