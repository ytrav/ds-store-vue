<template>
    <aside>
        <router-link to="/shipping">Shipping</router-link>
        <router-link to="/payment">Payment</router-link>
        <router-link to="/return">Return</router-link>
        <router-link to="/faq">FAQ</router-link>
        <router-link id="sign-in" to="/login">Sign in</router-link>
    </aside>
    <header>
        <router-link to="/" id="logo"></router-link>
        <div id="search-div" :class="{ active: searchQuery !== '' }">
            <input type="text" name="search" id="search" v-model="searchQuery"
                :placeholder="`Search for ${placeholder}...`"><button>Search</button><button>
                <mdicon name="magnify" size="20" />
            </button>
        </div>
        <div class="header-tabs">
            <div class="search">
                <mdicon name="magnify" size="35" />
            </div>
            <div id="cart-wrap">
                <div @click="toggleCart" :class="{ clicked: $store.state.cartOpened }" class="cart">
                    <mdicon name="cart" size="20" />
                </div>
                <Transition name="cart">
                    <AppCart v-if="$store.state.cartOpened" />
                </Transition>
            </div>
            <div class="menu" @click="toggleHam">
                <mdicon name="menu" size="20"></mdicon>
            </div>
        </div>
        <div class="cartbg" v-if="$store.state.cartOpened" @click="toggleCart"></div>
    </header>
</template>

<script>
import AppCart from './AppCart.vue';

export default {
    name: 'AppHeader',
    data() {
        return {
            searchQuery: '',
            placeholder: 'things',
            placeholderText: [
                'smartphones',
                'tablets',
                'gaming consoles',
                'laptops',
                'smartwatches',
                'video games',
                'headphones',
                'phone chargers',
                'smart speakers',
                'things',
            ],
        }
    },
    components: {
        AppCart,
    },
    methods: {
        toggleHam() {
            this.$store.commit('toggleHam');
        },
        toggleCart() {
            this.$store.commit('toggleCart');
        },
    },
    mounted() {
        // get a random number between 0 and 9
        const random = Math.floor(Math.random() * 10);
        // get the placeholder text from the array
        this.placeholder = this.placeholderText[random];
    },
}
</script>

<style lang="scss" scoped>
$gradient: linear-gradient(90deg, rgba(173, 203, 203, 1) 0%, rgba(208, 251, 251, 1) 100%);


.cart-enter-active,
.cart-leave-active {
    transition: opacity 0.3s, transform 0.3s;
}

.cart-enter-from,
.cart-leave-to {
    opacity: 0;
    transform: translateY(-50px);
}


#logo {
    background-image: url('../assets/logo.svg');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    height: 70px;
    width: 120px;
    transition: width 0.3s ease-in-out;
}

header {
    background-color: #29282d;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 2rem;
    gap: 1rem;
    position: sticky;
    top: 0;
    z-index: 1;
    width: 100%;
    min-height: 70px;

    a {
        height: 70px;
        // overflow: hidden;
    }

    a svg {
        height: 70px;
        width: 120px;
    }
}

aside {
    background-color: #262529;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    align-items: center;
    padding: 0 2rem;
    gap: 1rem;
    color: whitesmoke;
    width: 100%;
    padding: 5px 32px;

    a {
        text-decoration: none;
        color: #f5f5f5;

        &:hover {
            color: #fff4f4;
            text-decoration: underline;
        }
    }

    #sign-in {
        border: 1px solid #f5f5f5;
        padding: 5px 10px;
        border-radius: 5px;

        &:hover {
            background-color: #f5f5f5;
            color: #262529;
            text-decoration: none;
        }
    }
}

input {
    background-color: #424148;
    border: none;
    outline: none;
    border-radius: 5px;
    padding: 10px;
    color: #f5f5f5;
}


#search-div {
    &.active {
        button {
            background-image: $gradient;
            color: #262529;
            transition: box-shadow 0.07s ease-out;

            &:hover {
                box-shadow: 0px 0px 60px rgba(208, 251, 251, 0.352);
            }
        }
    }

    flex: 4;
    display: flex;
    max-width: 900px;

    button {
        flex: 1;
        border: none;
        outline: none;
        background-color: #363639;
        color: #f5f5f5;
        border-radius: 0 5px 5px 0;
        padding: 10px 0px;
        cursor: pointer;
        // max-width: 1000px;

        &:hover {
            background-color: #f5f5f5;
            color: #262529;
        }

        &:last-child {
            display: none;
            min-width: 40px;
        }
    }
}

input {
    flex: 10;
    // max-width: 1500px;
    border-radius: 5px 0 0 5px;
}

.header-tabs {
    display: flex;
    align-items: center;
    gap: 10px;
}

.cart {
    border-radius: 5px;
    padding: 10px;
    color: #f5f5f5;

    background-color: #424148;
    transition: box-shadow 0.07s ease-out;

        cursor: pointer;

    &:hover,
    &.clicked {
        background-image: $gradient;
        color: #262529;
    }

    &:active {
        box-shadow: 0px 0px 60px rgba(208, 251, 251, 0.352);
    }
}

.cartbg {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 12;

}

.search {
    color: #f5f5f5;
    display: none;
    cursor: pointer;

    &:hover {
        color: #c3c3c3;
    }
}

.menu {
    display: none;
    color: #f5f5f5;
    background-color: #424148;
    border-radius: 5px;
    padding: 10px;
    transition: box-shadow 0.07s ease-out;
    cursor: pointer;

    &:hover {
        background-image: $gradient;
        color: #262529;
    }

    &:active {
        box-shadow: 0px 0px 60px rgba(208, 251, 251, 0.352);
    }
}

@media only screen and (max-width: 964px) {

    .menu {
        display: block;
    }

    header {
        justify-content: space-between;
    }
}

@media only screen and (max-width: 928px) {
    #search-div {
        button {
            &:nth-child(2) {
                display: none;
            }

            &:last-child {
                display: block;
            }

        }
    }
}

@media only screen and (max-width: 768px) {
    aside {
        display: none;
    }
}

@media only screen and (max-width: 551px) {


    #search-div {
        display: none;
    }

    .search {
        display: block;
    }
}

@media only screen and (max-width: 370px) {
    #logo {
        background-image: url('../assets/logo.svg');
        // crop the logo the left side
        background-position: left;
        background-repeat: no-repeat;
        background-size: cover;

        height: 40px;
        width: 40px;
    }
}
</style>