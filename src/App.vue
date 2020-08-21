<template>
  <div id="app">
    <app-header></app-header>
    <transition name="fade">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
  </transition>
  <app-footer></app-footer>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Header from './components/header.vue';
import Footer from './components/footer.vue';



export default {
  name: 'App',
  components: {
    // HelloWorld
    'app-header': Header,
    'app-footer':Footer
      
  }
}
</script>

<style>
  @import './assets/style.css';
  @import './assets/css/plugins.css';
  @import './assets/css/style.css';
  @import './assets/css/templete.css';
  @import './assets/css/skin/skin-1.css';

  
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
