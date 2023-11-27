<template>
<div>
  <GlobalStyles/>
    <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    <div>{{this.$store.state.count}}</div>
  </nav> -->
  <div>
    <SiteHeader/>
  </div>
  <div>
    <ArticlesAndNewsSlider/>
  <!-- <router-view/> -->
  </div>
  <div>
    <SiteFooter/>
  </div>
</div>
</template>
<script>
import SiteHeader from '@/components/GlobalComponents/SiteHeader/SiteHeader.vue'
import SiteFooter from '@/components/GlobalComponents/SiteFooter/SiteFooter.vue'
import GlobalStyles from '@/components/GlobalComponents/GlobalStyles.vue'
import ArticlesAndNewsSlider from '@/components/PrivateComponents/ArticlesAndNewsSlider.vue'
export default {
  name: 'App',
  components: {
    GlobalStyles,
    SiteHeader,
    SiteFooter,
    ArticlesAndNewsSlider
  }
}
</script>
<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
