<template>
    <div class="member_card_container" :style="`background-image: url(${memberCardViewModel.image_src});`" :onclick="() => { console.log('Clicked on a member!'); }">
        <div class="member_card_shade">
            <p class="member_card_name">{{ memberCardViewModel.name }}</p>
            <p class="member_card_other">{{ memberCardViewModel.role }} - {{ memberCardViewModel.post_name }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
    // This will be the data of one of the members.
    const member = {
        name: "Dalxa Yusuf",
        role: "Ordförande",
        post_name: "Lekledare",
        favorite_sport: "Football",
        bio: "Hi! My name is Dalxa and I'm the head of iDrott. It is my resonsibility to blabalbala...",
        image_src: "/public/temporary/images/TempProfileImageDalxa.png",
        birth_year: 2003,
        mail: "Dalxa.Yusuf@blabla.com",
        member_id: 0
    };

    // This is the data that will be used by the card.
    const memberCardViewModel = {
        name: member.name,
        role: member.role,
        post_name: member.post_name,
        image_src: member.image_src
    };
</script>

<style>
    .member_card_container {
        aspect-ratio: 1 / 1;
        background-size: contain;
    }

    .member_card_shade {
        width: 100%;
        height: 100%;
        overflow: hidden;

        background-image: linear-gradient(to top, var(--primary_color) 7%, rgba(0, 0, 0, 0) 37%);

        display: flex;
        flex-direction: column;
        align-items: baseline;
        justify-content: end;
        gap: 5px;
    }

    .member_card_container:hover {
        transform: scale(1.05);

        cursor: pointer;
    }

    .member_card_name, .member_card_other {
        color: var(--secondary_color);
        margin: 0;

        margin-left: 20px;
    }

    .member_card_name {
        font-size: 1.3em;
        font-weight: 700;
    }

    .member_card_other {
        font-size: 0.9em;
        font-weight: 100;

        margin-bottom: 20px;
    }
</style>