<template>
    <div id="product-tab">
        <div id="info">
            <!-- <img :src="product.imagePath" :alt="product.productName" :title="product.productName">
            <h2>{{ product.productName }}</h2> -->
            test
            {{ sidebar }}
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProductPage',
    props: {
        sidebar: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
        }
    },
    methods: {
    },
    mounted() {
    },
}
</script>