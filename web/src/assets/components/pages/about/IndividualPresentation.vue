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
            img: "/images/pages/about/Dalxa.jpg",
            role: "Ordförande",
            post: "Lekledare",
            name: "Dalxa Yusuf",
            mail: "dalyus@dtek.se",
            favSport: "Kubb",
            favSong: "'Balblalba' - Michael Jackson",
            task: "I plan and support the team in every way possible to deliver on our goals."
        },
        {
            img: "/images/pages/about/Halli.jpg",
            role: "PR",
            post: "Maskot",
            name: "Isabella Hall",
            mail: "isahall@dtek.se",
            favSport: "Golf",
            favSong: "'Balblalba' - Michael Jackson",
            task: "I make sure that everyone is aware about when, where and what events we are currently planning to execute."
        },
        {
            img: "/images/pages/about/Lukas.jpg",
            role: "PR",
            post: "Duracellkanin",
            name: "Lukas Söderberg",
            mail: "luksode@dtek.se",
            favSport: "Football",
            favSong: "'Balblalba' - Michael Jackson",
            task: "I make sure that everyone is aware about when, where and what events we are currently planning to execute."
        },
        {
            img: "/images/pages/about/Joy.jpg",
            role: "Material",
            post: "Skadad",
            name: "Joy Sabbah",
            mail: "joysab@dtek.se",
            favSport: "Darts",
            favSong: "'Balblalba' - Michael Jackson",
            task: "I'm responsible for making sure that we have the right material for the right job."
        },
        {
            img: "/images/pages/about/Hjalmar.jpg",
            role: "Korpen",
            post: "Rehab",
            name: "Hjalmar Rorsman",
            mail: "hjalror@dtek.se",
            favSport: "Football",
            favSong: "'Balblalba' - Michael Jackson",
            task: "I take care of everything regarding our korpen team."
        },
        {
            img: "/images/pages/about/Rawa.jpg",
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
</style>