import { createApp } from "vue";
import { createRouter, createMemoryHistory } from "vue-router";

import App from "./App.vue";

// Pages:
import HomePage from "./pages/HomePage.vue";
import AboutPage from "./pages/AboutPage.vue";

const routes = [
    { path: "/", component: HomePage, name: "Home" },
    { path: "/about", component: AboutPage, name: "About" }
];

const router = createRouter({
    history: createMemoryHistory(),
    routes
});

import { library } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope, faDumbbell, faMusic, faGear } from "@fortawesome/free-solid-svg-icons"

library.add(faEnvelope, faDumbbell, faMusic, faGear);

const app = createApp(App);

app.config.globalProperties.$routes = routes;

app.use(router);

app.mount("#app");