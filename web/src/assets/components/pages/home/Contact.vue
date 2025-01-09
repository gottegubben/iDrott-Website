<template>
    <BasicContainer>
        <ContentContainer>
            <div>
                <h3>Contact us</h3>
                <p>Ask us any questions!</p>
            </div>

            <form action="">
                <label for="first_name">First name</label>
                <input type="text" id="first_name" placeholder="Your name...">

                <label for="last_name">Last name</label>
                <input type="text" id="last_name" placeholder="Your last name...">

                <label for="subject">Subject</label>
                <select name="subject" id="subject">
                    <option value="tuesday_practice_wish">Tuesday practice wish</option>
                    <option value="website_issue">Website issue</option>
                    <option value="general question">General question</option>
                    <option value="other">Other</option>
                </select>

                <label for="message">Message</label>
                <textarea id="message" name="subject" placeholder="Write something..."></textarea>

                <button class="basic_button font_p" type="submit">Submit</button>
            </form>
        </ContentContainer>
    </BasicContainer>
</template>

<script setup lang="ts">
    import BasicContainer from '../../containers/BasicContainer.vue';
    import ContentContainer from '../../containers/ContentContainer.vue';
</script>

<style scoped>
    .basic_container {
        background-color: var(--primary_color);
    }

    .content_container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr;

        height: 500px;
    }
</style>