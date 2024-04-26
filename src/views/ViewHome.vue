<script setup>
    import FrontImage from '@/components/Home/FrontImage.vue';

    import Climbing from '@/assets/icons/Climbing.vue';
</script>

<template>
    <FrontImage></FrontImage>

    <div id="info-container">
        <Climbing></Climbing>
        <div class="content-container">
            <div id="grid">
                <div></div>
                <div id="text-container">
                    <h2>We host practice sessions!</h2>
                    <p>At least once a week, iDrott hosts a practice session for all students currently enrolled in the Computer Science program at Chalmers. The types of sessions themselves can range from a variety of different sports such as volleyball, basketball and table tennis.<br><br>To read more about upcoming events and activities, please refer yourself to the activities page!</p>
                </div>
            </div>
        </div>
    </div>

    <div id="contact-container">
        <div class="content-container" style="height: inherit;">
            
        </div>
    </div>
</template>

<style scoped>
    svg {
        position: absolute;
    }

    div#info-container {
        display: flex;
        justify-content: center;
        width: 100%;
        height: 700px;
        object-fit: contain;
    }

    div.content-container, div#grid {
        height: inherit;
    }

    div#grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }

    p, h2 {
        color: red;
    }
</style>