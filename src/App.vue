<template>
  <Transition name="ham">
    <AppHamburger v-if="$store.state.hamOpened" />
  </Transition>
  <Transition name="hambg">
    <div id="hamburger" @click="toggleHam" v-if="$store.state.hamOpened"></div>
  </Transition>
  <AppHeader />
  <router-view />
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import AppHamburger from './components/AppHamburger.vue';


export default {
  name: 'App',
  components: {
    AppHeader,
    AppHamburger,
  },
  methods: {
    toggleHam() {
      this.$store.commit('toggleHam');
    }
  }
}
</script>

<style lang="scss">
$gradient: linear-gradient(90deg, rgba(173, 203, 203, 1) 0%, rgba(208, 251, 251, 1) 100%);

@font-face {
  font-family: 'Product Sans';
  src: url(assets/ProductSans-Regular.ttf);
}

.ham-enter-active, .ham-leave-active {
  transition: all 0.5s ease;
}

.ham-enter-from, .ham-leave-to {
  transform: translateX(100%);
}

.hambg-enter-active, .hambg-leave-active {
  transition: all 0.5s ease;
}

.hambg-enter-from, .hambg-leave-to {
  opacity: 0;
}

#hamburger {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
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
