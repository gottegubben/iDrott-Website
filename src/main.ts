import { createApp } from "vue"; //For Vue init.

import { createRouter, createMemoryHistory } from "vue-router"; //For Vue Router init.

//Import all the views (pages).
import HomeView from "./view/HomeView.vue";

const routes = [
    { path: '/', component: HomeView }
];

const router = createRouter({
    history: createMemoryHistory(), //For playground purposes.
    routes
});

import App from "./App.vue";

const app = createApp(App);

app.use(router); //Make sure the app uses the router.

app.mount("#app"); //Mount the app on a div with id #app.