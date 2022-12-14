import { createApp } from 'vue'
import { createStore } from 'vuex'
import mdiVue from 'mdi-vue/v3'
import * as mdijs from '@mdi/js'
import App from './App.vue'
// import Vue3TouchEvents from 'vue3-touch-events'
import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('./components/content/AppHome.vue');

const Product = () => import('./components/content/ProductPage.vue');

const Login = () => import('./components/content/AppLogin.vue');

//info tabs

const Shipping = () => import('./components/content/AppShipping.vue');

const Payment = () => import('./components/content/AppPayment.vue');

const Return = () => import('./components/content/AppReturn.vue');

const Faq = () => import('./components/content/AppFaq.vue');

const Contact = () => import('./components/content/AppContact.vue');

const routes = [
    { path: '/', component: Home },
    { path: '/:category/:product', component: Product, props: { default: true, sidebar: false}},
    { path: '/login', component: Login },
    { path: '/shipping', component: Shipping },
    { path: '/payment', component: Payment },
    { path: '/return', component: Return },
    { path: '/faq', component: Faq },
    { path: '/contact', component: Contact },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

const store = createStore({
    state() {
        return {
            hamOpened: false,
            cartOpened: true,
            isSignedIn: false,
            deals: [
                {
                    productName: 'Apple MacBook Pro 13" 2020',
                    price: 1299,
                    imagePath: require(`./assets/apple-macbook-2020-13in-silver.png`),
                    route: '/laptops/apple-macbook-pro-13-2020',
                    productId: 'apple-macbook-pro-13-2020',
                    category: 'Laptops',
                    selected: false,
                },
                {
                    productName: 'Google Pixelbook Go',
                    price: 699,
                    imagePath: require(`./assets/google-pixelbook-go.png`),
                    route: '/laptops/google-pixelbook-go',
                    productId: 'google-pixelbook-go',
                    category: 'Laptops',
                    selected: false,
                },
                {
                    productName: 'Microsoft Surface Go 2',
                    price: 499,
                    imagePath: require(`./assets/microsoft-surface-go-2.png`),
                    route: '/laptops/microsoft-surface-go-2',
                    productId: 'microsoft-surface-go-2',
                    category: 'Laptops',
                    selected: false,
                },
                {
                    productName: 'Template',
                    price: 999,
                    imagePath: require(`./assets/apple-macbook-2020-13in-silver.png`),
                    route: '/laptops/apple-macbook-pro-13-2020',
                    productId: 'template-product1',
                    category: 'Laptops',
                    selected: false,
                },
                {
                    productName: 'Template',
                    price: 999,
                    imagePath: require(`./assets/apple-macbook-2020-13in-silver.png`),
                    route: '/laptops/apple-macbook-pro-13-2020',
                    productId: 'template-product2',
                    category: 'Laptops',
                    selected: false,
                },
                {
                    productName: 'Template',
                    price: 999,
                    imagePath: require(`./assets/apple-macbook-2020-13in-silver.png`),
                    route: '/laptops/apple-macbook-pro-13-2020',
                    productId: 'template-product3',
                    category: 'Laptops',
                    selected: false,
                },
                {
                    productName: 'Template',
                    price: 999,
                    imagePath: require(`./assets/apple-macbook-2020-13in-silver.png`),
                    route: '/laptops/apple-macbook-pro-13-2020',
                    productId: 'template-product4',
                    category: 'Laptops',
                    selected: false,
                },
                {
                    productName: 'Template',
                    price: 999,
                    imagePath: require(`./assets/apple-macbook-2020-13in-silver.png`),
                    route: '/laptops/apple-macbook-pro-13-2020',
                    productId: 'template-product5',
                    category: 'Laptops',
                    selected: false,
                },
                {
                    productName: 'Template',
                    price: 999,
                    imagePath: require(`./assets/apple-macbook-2020-13in-silver.png`),
                    route: '/laptops/apple-macbook-pro-13-2020',
                    productId: 'template-product6',
                    category: 'Laptops',
                    selected: false,
                },
                {
                    productName: 'Template',
                    price: 999,
                    imagePath: require(`./assets/apple-macbook-2020-13in-silver.png`),
                    route: '/laptops/apple-macbook-pro-13-2020',
                    productId: 'template-product7',
                    category: 'Laptops',
                    selected: false,
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
        },
        toggleCart(state) {
            state.cartOpened = !state.cartOpened;
        },
        setSelection(state, payload) {
            state.deals.forEach((item) => {
                if (item.productId === payload) {
                    item.selected = !item.selected;
                    // set every other item to false
                    state.deals.forEach((item) => {
                        if (item.productId !== payload) {
                            item.selected = false;
                        }
                    });
                }
            });
        }
    },
})

createApp(App).use(mdiVue, {
    icons: mdijs
}).use(router).use(store).mount('#app')


// .use(Vue3TouchEvents)