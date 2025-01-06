import { createApp } from "vue";
import { createRouter, createMemoryHistory } from "vue-router";

import App from "./App.vue";

// Pages:
import HomePage from "./pages/HomePage.vue";

const routes = [
    { path: "/", component: HomePage, name: "Home" },
    { path: "/", component: HomePage, name: "Events" },
    { path: "/", component: HomePage, name: "About" }
];

const router = createRouter({
    history: createMemoryHistory(),
    routes
});

const app = createApp(App);

app.config.globalProperties.$routes = routes;

app.use(router);

app.mount("#app");