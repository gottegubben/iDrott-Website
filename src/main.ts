//Import all the css assets.
import './assets/color.css';
import './assets/font.css';
import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createMemoryHistory, createRouter } from 'vue-router';

import App from './App.vue';

//Create the app.
const app = createApp(App);

//Create Pinia.
const pinia = createPinia();

app.use(pinia);

//Configure the routes and the router itself.
import ViewHome from './views/ViewHome.vue';
import ViewBoard from './views/ViewBoard.vue';
import ViewActivities from './views/ViewActivities.vue';
import ViewHackeDutd from './views/ViewHackeDutd.vue';

const routes = [
    { path: '/', component: ViewHome },
    { path: '/board', component: ViewBoard },
    { path: '/activities', component: ViewActivities },
    { path: '/hackeutd', component: ViewHackeDutd }
];

const router = createRouter({
    history: createMemoryHistory(),
    routes: routes
});

app.use(router);

//Mount the app on a div with the id = #app.
app.mount('#app');