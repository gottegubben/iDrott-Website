import { createApp } from "vue";
import { createRouter, createMemoryHistory } from "vue-router";

import App from "./App.vue";

// Pages:
import HomePage from "./pages/HomePage.vue";

const routes = [
    { path: "/", name: "Home", component: HomePage },
    { path: "/test", name: "Test", component: HomePage }
];

const router = createRouter({
    history: createMemoryHistory(),
    routes
});

const app = createApp(App);

app.config.globalProperties.$routes = routes;

app.use(router);

app.mount("#app");