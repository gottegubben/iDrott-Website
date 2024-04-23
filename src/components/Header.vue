<script setup>
    import iDrottTxtLogo from '@/assets/icons/iDrottTxtLogo.vue';
</script>

<template>
    <div id="HeaderContainer">
        <header>
            <iDrottTxtLogo width="132px" color="var(--color60)"></iDrottTxtLogo> <!-- This is the iDrott logo. -->

            <!-- The unordered list contains all the router links to the different pages on the website. -->
            <ul>
                <li v-for="route in $router.options.routes"><router-link :to=route.path>{{ route.name }}</router-link></li> <!-- For each route that exist => create a routeLink with that route. -->
            </ul>
        </header>
    </div>
</template>

<style scoped>
    div#HeaderContainer { /* The header container just centers the header. */
        background-color: var(--color30);

        width: 100%;
        display: flex;
        justify-content: center;
    }

    header {
        max-width: var(--max_page_width);
        margin: 0 var(--page_min_margin) 0 var(--page_min_margin); /* Left and right margin is = (--page_min_margin). */
        width: 100%; /* The header should try to reach as far as it can, but should be stopped by the max-width. */
        height: 70px;

        display: flex;
        align-items: center
    }

    ul {
        display: flex;
        margin-left: auto;
    }

    li {
        display: inline;
    }
</style>