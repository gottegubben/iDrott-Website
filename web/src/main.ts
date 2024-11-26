import { createApp } from "vue";
import { createRouter, createMemoryHistory } from "vue-router";

import App from "./App.vue";

// Pages:
import HomePage from "./pages/HomePage.vue";
import AboutPage from "./pages/AboutPage.vue";
import GalleryPage from "./pages/GalleryPage.vue";

const routes = [
    { path: "/", component: HomePage },
    { path: "/about", component: AboutPage },
    { path: "/gallery", component: GalleryPage }
];

const router = createRouter({
    history: createMemoryHistory(),
    routes
});

const app = createApp(App);

app.use(router);

app.mount("#app");