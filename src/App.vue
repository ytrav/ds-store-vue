<template>
  <AppHeader />
  <router-view />
</template>

<script>
import AppHeader from './components/AppHeader.vue';


export default {
  name: 'App',
  components: {
    AppHeader,
  },
}
</script>

<style lang="scss">
@font-face {
  font-family: 'Product Sans';
  src: url(assets/ProductSans-Regular.ttf);
}

* {
  font-family: 'Product Sans';
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  // border: 1px solid rgba(255, 0, 0, 0.499);
}

a {
  text-decoration: none;
  color: initial;
}

#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
}

</style>
