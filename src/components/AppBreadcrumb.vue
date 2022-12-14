<template>
    <div id="breadcrumbs">
        <router-link to="/">Home</router-link>
        <span>/</span>
        <router-link v-if="route.categoryPath !== ''" :to="route.categoryPath">{{ route.category }}</router-link>
        <span v-if="route.categoryPath !== ''">/</span>
        <router-link :to="route.path">{{ route.name }}</router-link>
        <!-- <span v-if="localProduct.category.name !== ''">/</span>
        <router-link :to="localProduct.route" v-if="localProduct.name !== ''">{{ localProduct.name }}</router-link> -->
    </div>
</template>

<script>
export default {
    name: 'AppBreadcrumb',
    props: {
        route: {
            type: Object,
            required: true,
        }
    },
    data() {
        return {
            // localProduct: this.product,
        }
    },
    methods: {
    },
    // mounted() {
    //     // if something is undefined, make it ''
    //     if (this.localProduct.category.name === undefined) {
    //         this.localProduct.category.name = '';
    //     }
    //     if (this.localProduct.name === undefined) {
    //         this.localProduct.name = '';
    //     }
    // },
}
</script>

<style lang="scss" scoped>
#breadcrumbs {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
    font-size: 1.2rem;
    font-weight: 500;
    width: 100%;
    max-width: 1200px;
    padding: 0 32px;
    span {
        font-size: 1.5rem;
    }
    margin-top: 32px;
}
</style>