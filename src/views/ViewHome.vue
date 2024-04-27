<script setup>
    import FrontImage from '@/components/Home/FrontImage.vue';
</script>

<template>
    <FrontImage></FrontImage>

    <div id="info-container">
        <div class="content-container-1">
            <div id="grid">
                <div></div>
                <div id="text-container">
                    <h1>We host <span id="practice">practice</span> sessions!</h1>
                    <p>At least once a week, iDrott hosts a practice session for all students currently enrolled in the Computer Science program at Chalmers. The types of sessions themselves can range from a variety of different sports such as volleyball, basketball and table tennis.<br><br>To read more about upcoming events and activities, please refer yourself to the activities page!</p>
                </div>
            </div>
        </div>
    </div>

    <div id="contact-container" style="height: 200px; background-color: var(--color30);">
        <div class="content-container" style="height: inherit;">
            
        </div>
    </div>
</template>

<style scoped>
    div#info-container {
        position: relative;
        display: flex;
        justify-content: center;
        background-color: var(--color30);
    }

    div.content-container-1 {
        background: var(--color60) url("../assets/images/climbing.svg") no-repeat center top;
        background-size: cover;
    }

    div.content-container, div#grid {
        height: inherit;
    }

    div#grid {
        margin-top: var(--space-xxl);
        display: grid;
        grid-template-columns: 1fr 1fr;
    }

    div#text-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    p {
        margin-top: 0;
        font-weight: var(--font-weight-m);
    }

    span#practice {
        color: var(--color10);
    }
</style>