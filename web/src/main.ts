import { createApp } from "vue";
import { createRouter, createMemoryHistory } from "vue-router";

import App from "./App.vue";

// Pages:
import HomePage from "./pages/HomePage.vue";
import EventPage from "./pages/EventPage.vue";

// { path: "/", component: HomePage, name: "Home" }

const routes = [
    { path: "/", component: HomePage, name: "Home" },
    { path: "/events", component: EventPage, name: "Events" }
];

const router = createRouter({
    history: createMemoryHistory(),
    routes
});

const app = createApp(App);

app.config.globalProperties.$routes = routes;

app.use(router);

app.mount("#app");