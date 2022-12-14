<template>
    <div id="cart">
        <mdicon name="arrow-up" />
        <h2>Cart</h2>
        <div class="cart-contents">
            <div class="cart-item" v-for="item in cartItems" :key="item">
                <img src="/" alt="image">
                <span>{{ item.itemName }}</span>
            </div>
        </div>
        <div class="cart-footer">
            <div class="total"><span>$28391</span></div>
            <div class="divider"></div>
            <button id="checkout-button">Checkout</button>
            <div class="divider"></div>
            <button id="clear-cart"><mdicon name="delete" /></button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AppCart',
    data() {
        return {
            cartItems: [
                {
                    itemName: 'test item 1',
                    itemPrice: 100,
                    image: '/',
                },
                {
                    itemName: 'test item 2',
                    itemPrice: 100,
                    image: '/',
                },
                {
                    itemName: 'test item 3',
                    itemPrice: 100,
                    image: '/',
                },
                {
                    itemName: 'test item 4',
                    itemPrice: 100,
                    image: '/',
                },
                
                

                

            ],
        }
    },
    methods: {
    },
    mounted() {
    },
}
</script>

<style lang="scss" scoped>
#cart {
    position: fixed;
    width: 250px;
    display: flex;
    flex-direction: column;
    // align-items: center;
    justify-content: space-between;
    background-image: linear-gradient(90deg, #434246 0%, #2e2d33 100%);
    min-height: 300px;
    border-radius: 10px;
    right: 20px;
    top: 20px;
    margin-top: 20px;
    z-index: 13;
    overflow: hidden;
}
.mdi-arrow-up {
    position: relative;
    top: 0;
    left: 0;
    width: 50px;
    height: 40px;
    background-color: #484748;
    border-radius: 0 0 5px 0;
    padding: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
        cursor: pointer;
        background-image: linear-gradient(90deg, rgba(173, 203, 203, 1) 0%, rgba(208, 251, 251, 1) 100%);
        color: #000;
    }
}



h2 {
    font-weight: 300;
    color: #fff;
    margin: -34px 0 10px 0;
    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    text-align: center;

}

.cart-contents {
    flex: 2;
    padding: 0 20px;
}

.cart-item {
    span {
        overflow-x: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        max-width: 120px;
    }
}

.cart-footer {
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    background-color: #484748;
}

.divider {
    width: 1px;
    background-color: rgba(255, 255, 255, 0.441);
    min-height: 100%;
}

.total {
    font-size: 1.2rem;
    margin-left: 10px;
    min-height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 2;
}

#checkout-button {
    border: none;
    background-color: #484748;
    color: #fff;
    padding: 5px;
    min-height: 100%;
    flex: 2;
}

#clear-cart {
    border: none;
    background-color: #484748;
    color: #fff;
    padding: 10px;
    border-radius: 0 0 5px 0;
    height: 100%;
    flex: 1;
    
}

#checkout-button, #clear-cart {
    transition: box-shadow 0.1s ease-out;
}

#clear-cart:hover, #checkout-button:hover {
    cursor: pointer;
    background-image: linear-gradient(90deg, rgba(173, 203, 203, 1) 0%, rgba(208, 251, 251, 1) 100%);
    color: #000;
}

#clear-cart:active, #checkout-button:active {
        box-shadow: 0px 0px 60px rgba(208, 251, 251, 0.352);
}

div {
    color: #fff;
}

.cart-item {
    display: flex;
    justify-content: space-between;
}

</style>