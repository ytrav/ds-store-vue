<template>
  <Transition name="ham">
    <AppHamburger v-if="$store.state.hamOpened" />
  </Transition>
  <Transition name="hambg">
    <div id="hamburger" @click="toggleHam" v-if="$store.state.hamOpened"></div>
  </Transition>
  <AppHeader />
  <AppBreadcrumb :route="route" />
  <router-view />
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import AppHamburger from './components/AppHamburger.vue';
import AppBreadcrumb from './components/AppBreadcrumb.vue';


export default {
  name: 'App',
  components: {
    AppHeader,
    AppHamburger,
    AppBreadcrumb,
  },
  data() {
    return {
      route: {
        name: '',
        productName: '',
        category: '',
        path: '',
        categoryPath: '',
      },
    };
  },
  methods: {
    toggleHam() {
      this.$store.commit('toggleHam');
    },
    getRouteName(path) {
      switch (path) {
        case '/login':
          return 'Login';
        case '/shipping':
          return 'Shipping';
        case '/payment':
          return 'Payment';
        case '/faq':
          return 'FAQ';
        case '/contact':
          return 'Contact';
        case '/return':
          return 'Return';

        default:
          return '';
      }
    }
  },
  watch: {
    $route() {
      if (this.$store.state.hamOpened) {
        this.$store.commit('toggleHam');
      }
      // get route path
      this.route.path = this.$route.path;
      // get route name
      this.route.name = this.getRouteName(this.$route.path);
      // log both route path and name in console

      // if route path is /:category/:id then set category path and category name
      if (
        this.$route.path.includes('/phones')
        || this.$route.path.includes('/tablets')
        || this.$route.path.includes('/tv')
        || this.$route.path.includes('/laptops')
        || this.$route.path.includes('/accessories')
      ) {
        this.route.categoryPath = this.$route.path.split('/')[1];
        this.route.category = this.$route.path.split('/')[1].charAt(0).toUpperCase() + this.$route.path.split('/')[1].slice(1);
        if (this.$route.path.includes('/tv')) {
          this.route.category = 'Television';
        }
      } else {
        this.route.categoryPath = '';
        this.route.category = '';
      }
    }
  }
}
</script>

<style lang="scss">
$gradient: linear-gradient(90deg, rgba(173, 203, 203, 1) 0%, rgba(208, 251, 251, 1) 100%);

::selection {
  background-color: #A9E5E5;
  color: #000;
}

@font-face {
  font-family: 'Product Sans';
  src: url(assets/ProductSans-Regular.ttf);
}

.ham-enter-active,
.ham-leave-active {
  transition: all 0.5s ease;
}

.ham-enter-from,
.ham-leave-to {
  transform: translateX(100%);
}

.hambg-enter-active,
.hambg-leave-active {
  transition: all 0.5s ease;
}

.hambg-enter-from,
.hambg-leave-to {
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
  -webkit-tap-highlight-color:  rgba(255, 255, 255, 0); 
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


#info-tab,
#login {
  padding: 32px;
  width: 100%;
  max-width: 1200px;

  h2 {
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    text-align: left;
    align-self: flex-start;
  }
}


@media only screen and (max-width: 728px) {
  #breadcrumbs {
    order: 3;
  }

  aside {
    order: 1;
  }

  header {
    order: 2;
  }

  #info-tab, #login, #product-tab, .home {
    order: 4;
  }

}
</style>


