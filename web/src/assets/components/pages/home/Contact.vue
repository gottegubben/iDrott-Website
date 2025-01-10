<template>
    <BasicContainer>
        <ContentContainer id="contact_us">
            <div>
                <h3 class="font_weight_medium">Contact us</h3>
                <p>Have a question? Ask us!</p>
                <picture>
                    <source media="(max-width: 640px)" srcset="/images/pages/home/Contact_Us_Small_7_5.png">
                    <source media="(max-width: 1280px)" srcset="/images/pages/home/Contact_Us_Medium_7_5.png">
                    <img src="/images/pages/home/Contact_Us_Large_7_5.png" alt="">
                </picture>
            </div>

            <form action="">
                <label for="first_name" class="font_p">First name</label>
                <input type="text" id="first_name" name="first_name" placeholder="Your name..." class="font_p">

                <label for="last_name" class="font_p">Last name</label>
                <input type="text" id="last_name" name="last_name" placeholder="Your last name..." class="font_p">

                <label for="subject" class="font_p">Subject</label>
                <select name="subject" id="subject" class="font_p">
                    <option value="tuesday_practice_wish">Tuesday practice wish</option>
                    <option value="website_issue">Website issue</option>
                    <option value="general question">General question</option>
                    <option value="other">Other</option>
                </select>

                <label for="message" class="font_p">Message</label>
                <textarea id="message" name="message" placeholder="Write something..." class="font_p"></textarea>

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

        gap: var(--space_xxl_clamped);

        height: fit-content;
    }

    .content_container > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        margin: var(--space_xxl_clamped) 0;
    }

    form {
        margin: var(--space_xxl_clamped) 0;

        display: flex;
        flex-direction: column;
    }

    picture {
        margin-top: var(--space_md_clamped);
    }

    img {
        max-width: 100%;
        max-height: 90%;
    }

    form > label {
        margin-bottom: var(--space_xss_clamped);
    }

    input, textarea, select {
        border: 0;
        background-color: var(--primary_color_1);
        padding: 0.6em 1.3em;
        margin-bottom: var(--space_md_clamped);
    }

    input:-webkit-autofill,
    input:-webkit-autofill:hover, 
    input:-webkit-autofill:focus, 
    input:-webkit-autofill:active {
        background-color: var(--primary_color_1);
    }

    textarea {
        width: 100%;
        height: 15em;
        resize: none;
    }

    input::placeholder, textarea::placeholder, select::placeholder {
        color: var(--secondary_color_2);
    }

    button {
        background-color: var(--tertiary_color);
    }

    button:hover {
        background-color: var(--tertiary_color_1);
    }

    @media (max-width: 1280px) {
        .content_container {
            gap: var(--space_md_clamped);
        }
    }

    @media (max-width: 800px) {
        .content_container {
            grid-template-columns: 1fr;
            grid-template-rows: auto 1fr;
        }

        picture {
            display: none;
        }

        .content_container > div {
            margin-bottom: 0;
        }
    }
</style>