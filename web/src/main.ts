import { createApp } from "vue";
import { createRouter, createMemoryHistory } from "vue-router";

import App from "./App.vue";

// Pages:
import HomePage from "./pages/HomePage.vue";
import AboutPage from "./pages/AboutPage.vue";
import GalleryPage from "./pages/GalleryPage.vue";

const routes = [
    { path: "/", component: HomePage, name: "Home" },
    { path: "/about", component: AboutPage, name: "About" },
    { path: "/gallery", component: GalleryPage, name: "Gallery" }
];

const router = createRouter({
    history: createMemoryHistory(),
    routes
});

const app = createApp(App);

app.use(router);

app.mount("#app");