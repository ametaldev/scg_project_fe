import 'bootstrap/dist/css/bootstrap.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';
import App from './components/App.vue';
import axios from "axios"
//import "./filters"

import 'bootstrap-vue/dist/bootstrap-vue.css';
import BootstrapVue from 'bootstrap-vue';


/**
 * Prevent the production tip on Vue startup
 */
Vue.config.productionTip = false

/**
 * Tell Vue to use plugins
 */
Vue.use(BootstrapVue)
Vue.use(VueRouter)

/**
 * Router
 */
const router = new VueRouter(routes)

/**
 * Default axios as http library globally
 */
Vue.prototype.$http = axios

/**
 * Create VUE Application
 */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
