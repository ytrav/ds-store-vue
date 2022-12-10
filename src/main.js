import { createApp } from 'vue'
import { createStore } from 'vuex'
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

const store = createStore({
    state() {
        return {
            hamOpened: true,
            isSignedIn: false,
            deals: [
                {
                    productName: 'Apple MacBook Pro 13" 2020',
                    price: 1299,
                    imagePath: require(`./assets/apple-macbook-2020-13in-silver.png`),
                    route: '/product/apple-macbook-pro-13-2020',
                    productId: 'apple-macbook-pro-13-2020',
                },
                {
                    productName: 'Google Pixelbook Go',
                    price: 699,
                    imagePath: require(`./assets/google-pixelbook-go.png`),
                    route: '/product/google-pixelbook-go',
                    productId: 'google-pixelbook-go',
                },
                {
                    productName: 'Microsoft Surface Go 2',
                    price: 499,
                    imagePath: require(`./assets/microsoft-surface-go-2.png`),
                    route: '/product/microsoft-surface-go-2',
                    productId: 'microsoft-surface-go-2',
                },
                {
                    productName: 'Template',
                    price: 999,
                    imagePath: require(`./assets/apple-macbook-2020-13in-silver.png`),
                    route: '/product/apple-macbook-pro-13-2020',
                    productId: 'template-product1',
                },
                {
                    productName: 'Template',
                    price: 999,
                    imagePath: require(`./assets/apple-macbook-2020-13in-silver.png`),
                    route: '/product/apple-macbook-pro-13-2020',
                    productId: 'template-product2',
                },
                {
                    productName: 'Template',
                    price: 999,
                    imagePath: require(`./assets/apple-macbook-2020-13in-silver.png`),
                    route: '/product/apple-macbook-pro-13-2020',
                    productId: 'template-product3',
                },
                {
                    productName: 'Template',
                    price: 999,
                    imagePath: require(`./assets/apple-macbook-2020-13in-silver.png`),
                    route: '/product/apple-macbook-pro-13-2020',
                    productId: 'template-product4',
                },
                {
                    productName: 'Template',
                    price: 999,
                    imagePath: require(`./assets/apple-macbook-2020-13in-silver.png`),
                    route: '/product/apple-macbook-pro-13-2020',
                    productId: 'template-product5',
                },
                {
                    productName: 'Template',
                    price: 999,
                    imagePath: require(`./assets/apple-macbook-2020-13in-silver.png`),
                    route: '/product/apple-macbook-pro-13-2020',
                    productId: 'template-product6',
                },
            ],
            items: [
                {
                    name: 'Phones',
                    path: '/phones',
                },
                {
                    name: 'Tablets',
                    path: '/tablets',
                },
                {
                    name: 'Laptops',
                    path: '/laptops',
                },
                {
                    name: 'Television',
                    path: '/tv',
                },
                {
                    name: 'Accessories',
                    path: '/accessories',
                },
                {
                    name: 'Browse all',
                    path: '/all',
                },
            ],
            cart: [],
        }
    },
    mutations: {
        addToCart(state, payload) {
            state.cart.push(payload);
        },
        toggleHam(state) {
            state.hamOpened = !state.hamOpened;
        }
    },
})

createApp(App).use(mdiVue, {
    icons: mdijs
}).use(router).use(store).mount('#app')
