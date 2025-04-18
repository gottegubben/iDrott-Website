<template>
    <FixedPageContainer :class="onTopOfPage ? 'user_on_top' : 'user_not_ontop'">
        <ContentContainer>
            <IdrottTextLogo></IdrottTextLogo>

            <div id="router_links">
                <RouterLink v-for="route in routes" :to="route.path" class="router_link font_p font_header">{{ route.name }}</RouterLink>
                <BasicButton :button-style="ButtonStyle.variant_2" title="Contact us" class="font_p font_header" :onclick="moveToContactUs"></BasicButton>
            </div>

            <HamburgerMenu id="header_hamburger" :onclick="onHamburgerClick"></HamburgerMenu>

            <FixedPageContainer v-if="okForNavToBeDisplayed" :class="hamburgerIsSelected ? 'nav_hamburger_selected' : 'nav_hamburger_unselected'">
                <ContentContainer id="content_container_nav" v-if="hamburgerIsSelected">
                    <RouterLink v-for="route in routes" :to="route.path" class="router_link font_h2 link_idle" :onclick="onRouterLinkClick">{{ route.name }}</RouterLink>
                </ContentContainer>
            </FixedPageContainer>
        </ContentContainer>
    </FixedPageContainer>
</template>

<script setup lang="ts">
    import FixedPageContainer from './containers/FixedPageContainer.vue';
    import ContentContainer from './containers/ContentContainer.vue';
    import BasicButton from './BasicButton.vue';
    import { ButtonStyle } from '../typescripts/other/ButtonStyle';

    /* Component specific components! */
    import IdrottTextLogo from './IdrottTextLogo.vue';
    import HamburgerMenu from './HamburgerMenu.vue';

    import { ref } from 'vue';
    import { useRouter } from 'vue-router';

    const vueRouter = useRouter();
    const routes = vueRouter.options.routes;

    const okForNavToBeDisplayed = ref(true);
    const hamburgerIsSelected = ref(false);
    const onHamburgerClick = (event: MouseEvent) => {
        hamburgerIsSelected.value = !hamburgerIsSelected.value;
    };

    const onRouterLinkClick = () => {
        const input = <HTMLInputElement> document.getElementById("header_hamburger")?.children[0];
        input.checked = false;
        hamburgerIsSelected.value = false;
    };

    window.addEventListener("resize", () => 
    {
        let width = window.innerWidth;
        
        if (width > 640) {
            okForNavToBeDisplayed.value = false
        }
        else {
            okForNavToBeDisplayed.value = true;
        }
    });

    const onTopOfPage = ref(true);

    window.addEventListener("scroll", () => {
        let scrollY = window.scrollY !== undefined ? window.scrollY : 0;

        if (scrollY > 0) onTopOfPage.value = false;
        else onTopOfPage.value = true;
    });

    const moveToContactUs = async () => {
        vueRouter.push("/");
        await new Promise(r => setTimeout(r, 10)); /* Need to wait a short time for the route to take effect! */
        window.location.href = "/#contact_us";
    }
</script>

<style>
    :root {
        --header_height: 60px;
        --header_background_color_ontop: none;
        --header_background_color_not_ontop: var(--primary_color);
        --header_link_gap: var(--space_lg_clamped);
        --header_logo_color: var(--secondary_color);
        --header_hamburger_color: var(--secondary_color);
        --header_hamburger_height: 1.6rem;
        --nav_background_color: var(--primary_color);
        --header_logo_height: var(--font_h4_size_clamped);
        --font_header_size: clamp(0.8em, var(--font_p_size), 1em);
    }

    .router_link:hover, .router-link-active {
        text-decoration: underline !important;
        text-decoration-color: var(--tertiary_color) !important;
        text-underline-offset: 4px !important;
    }
</style>

<style scoped>
    .font_header {
        font-size: var(--font_header_size);
    }

    .fixed_page_container {
        height: var(--header_height);
        z-index: 500;
    }

    .content_container {
        height: inherit;
        
        display: flex;
        align-items: center;
    }

    .idrott_text_logo {
        height: var(--header_logo_height);
        fill: var(--header_logo_color);

        z-index: 1000;
    }

    #router_links {
        display: flex;
        align-items: center;

        margin-left: auto;
        gap: var(--header_link_gap);
    }

    .hamburger_menu {
        z-index: 1000;
        display: none;
    }

    .nav_hamburger_selected, .nav_hamburger_unselected {
        z-index: 999;

        height: 100vh;

        right: 0;
        top:   0;

        min-width: 0;

        background-color: var(--nav_background_color);

        transition: var(--animation_fast);
    }

    .nav_hamburger_unselected {
        width: 0;
    }

    .nav_hamburger_selected {
        width: 100vw;
    }

    #content_container_nav {
        padding-top: var(--header_height);
        height: 100%;
        box-sizing: border-box;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: end;
        gap: var(--space_xl_clamped);
    }

    @keyframes navigation_bar {
        0% {
            width: 0;
        }
        100% {
            width: 100vw;
        }
    }

    @media (max-width: 640px) {
        #router_links {
            display: none;
        }

        .hamburger_menu {
            display: flex;
        }
    }

    .user_on_top {
        background-color: var(--header_background_color_ontop);
    }

    .user_not_ontop {
        background-color: var(--header_background_color_not_ontop);
        box-shadow: var(--shadow_variant_1);
    }

    .user_on_top, .user_not_ontop {
        transition: var(--animation_fast);
    }
</style>