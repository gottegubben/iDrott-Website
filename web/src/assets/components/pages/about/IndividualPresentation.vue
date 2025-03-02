<template>
    <BasicContainer>
        <ContentContainer class="flex_column">
            <div class="presentation_container flex_column">
                <Person v-for="person in persons" :person="person"></Person>
            </div>
        </ContentContainer>
    </BasicContainer>
</template>

<script setup lang="ts">
    import type { IPersonViewModel } from '../../../typescripts/viewmodels/IPersonViewModel';
    import BasicContainer from '../../containers/BasicContainer.vue';
    import ContentContainer from '../../containers/ContentContainer.vue';
    import Person from './Person.vue';

    const persons: IPersonViewModel[] = [
        {
            img: "/images/pages/about/Dalxa_Large.jpg",
            role: "President",
            post: "Lekledare",
            name: "Dalxa Yusuf",
            mail: "dalxa.yusuf@dtek.se",
            favSport: "Kubb",
            favSong: "'Balblalba' - Michael Jackson",
            task: "As the chairman, I keep things running smoothly – from organizing events to making sure we don’t accidentally spend the budget on extra snacks. I lead meetings, make key decisions, and ensure the club stays on track. Basically, I’m here to keep the chaos under control and make sure we keep growing, improving, and having a great time while we’re at it!"
        },
        {
            img: "/images/pages/about/Halli_Large.jpg",
            role: "PR #Chief",
            post: "Maskot",
            name: "Isabella Hall",
            mail: "isahall@dtek.se",
            favSport: "Golf",
            favSong: "'Balblalba' - Michael Jackson",
            task: "I’m the PR mastermind, which basically means I make sure everyone knows how awesome we are. Social media, events, promotions – you name it, I hype it. Whether it’s crafting the perfect post, spreading the word, or making sure our club stays in the spotlight, I’ve got it covered. If you hear about us, chances are, that’s my doing!"
        },
        {
            img: "/images/pages/about/Lukas_Large.jpg",
            role: "PR #Benched",
            post: "Duracellkanin",
            name: "Lukas Söderberg",
            mail: "luksode@dtek.se",
            favSport: "Football",
            favSong: "'...' - ...",
            task: "Think of me as the club’s personal megaphone – but way cooler. I keep the buzz going, making sure everyone knows what’s happening and why they should be part of it. Whether it’s creating eye-catching posts (by copying the mastermind above), planning epic events, or just making sure we look good out there, I bring the energy. No boring press releases here – only top-tier hype!"
        },
        {
            img: "/images/pages/about/Joy_Large.jpg",
            role: "Materials",
            post: "Skadad",
            name: "Joy Sabbah",
            mail: "joysab@dtek.se",
            favSport: "Darts",
            favSong: "'Sunflower' - Post Malone",
            task: "I’m the proud keeper of all things sporty. Whether it’s footballs, badminton rackets, or that one lonely frisbee — if we have it, I keep track of it. If we don’t, well… maybe it’s time to change that! Need to borrow equipment? Return something (please)? Or do you think we should introduce a brand-new sport? Let me know! I’m the one making sure we have what we need to keep the fun going. Just don’t ask for a bobsled team… yet."
        },
        {
            img: "/images/pages/about/Hjalmar_Large.jpg",
            role: "Korpen",
            post: "Rehab",
            name: "Hjalmar Rorsman",
            mail: "hjalmar.rorsman@dtek.se",
            favSport: "EVERY SPORT (even floorball)",
            favSong: "'Love again' - Kid Laroi",
            task: "I'm the manager of Hacke UTD, the greatest football club… at the very bottom of the league! I manage the work behind this unstoppable squad. Relegation? Impossible — we literally can’t drop any lower! But don’t underestimate us. We may not have trophies (yet), but we’ve got heart, passion, and a rock-solid guarantee that our league status is secure forever. So join us on this wild ride — because when you start at the bottom, the only way is up!"
        },
        {
            img: "/images/pages/about/Rawa_Large.jpg",
            role: "Övrigt",
            post: "---",
            name: "Rawa ---",
            mail: "raw@dtek.se",
            favSport: "Fotboll",
            favSong: "'Balblalba' - Michael Jackson",
            task: "I do a lot!"
        }
    ];
</script>

<style scoped>
    .content_container {
        margin-bottom: calc(var(--space_xxl_clamped) * 3);
    }

    .presentation_container {
        gap: 50px;
        margin: 0 10%;
    }

    @media (max-width: 1080px) {
        .presentation_container {
            margin: 0;
        }
    }
</style>