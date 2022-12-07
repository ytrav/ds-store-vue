import { createApp } from 'vue'
import mdiVue from 'mdi-vue/v3'
import * as mdijs from '@mdi/js'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('./components/content/AppHome.vue');

const Product = () => import('./components/content/ProductPage.vue');

const routes = [
    { path: '/', component: Home },
    { path: '/product/:id', component: Product },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});


createApp(App).use(mdiVue, {
    icons: mdijs
}).use(router).mount('#app')
