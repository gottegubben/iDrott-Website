import { createApp } from "vue";
import { createRouter, createMemoryHistory } from "vue-router";

import App from "./App.vue";

// Pages:
import HomePage from "./pages/HomePage.vue";
import EventPage from "./pages/EventPage.vue";
import GalleryPage from "./pages/GalleryPage.vue";
import AboutPage from "./pages/AboutPage.vue";

const routes = [
    { path: "/", component: HomePage, name: "Home" },
    { path: "/events", component: EventPage, name: "Events" },
    { path: "/gallery", component: GalleryPage, name: "Gallery" },
    { path: "/about", component: AboutPage, name: "About" }
];

const router = createRouter({
    history: createMemoryHistory(),
    routes
});

const app = createApp(App);

app.config.globalProperties.$routes = routes;

app.use(router);

app.mount("#app");