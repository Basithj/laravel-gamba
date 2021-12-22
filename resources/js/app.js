require('./bootstrap');

import Vue from 'vue'
import App from './vue/App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCog } from '@fortawesome/free-solid-svg-icons/faCog'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import router from './vue/routes/router'
import store from "./vue/store";
import './vue/registerServiceWorker' 
import DashboardPlugin from './vue/plugins/dashboard-plugin';
import axios from "axios";
import VueAxios from "vue-axios";

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

library.add(faCog)
Vue.component('font-awesome-icon', FontAwesomeIcon)
//axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
 
// plugin setup
Vue.use(DashboardPlugin);
Vue.use(VueAxios, axios);

const app = new Vue({
  router: router,
  store: store,
  el: "#app",
  render: h => h(App)
});

store.$app = app;

