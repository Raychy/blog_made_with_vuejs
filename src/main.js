import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Routes from './routes';
import axios from 'axios';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../node_modules/jquery/dist/jquery.min.js';
import '../node_modules/font-awesome/css/font-awesome.min.css';



Vue.use(VueRouter);
Vue.use( axios);

const router = new VueRouter({
    routes:Routes,
    mode :'history'
})
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router:router
}).$mount('#app')
