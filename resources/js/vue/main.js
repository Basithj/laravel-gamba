/*!

=========================================================
* BootstrapVue Argon Dashboard - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/bootstrap-vue-argon-dashboard
* Copyright 2020 Creative Tim (https://www.creative-tim.com)

* Coded by www.creative-tim.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import Vue from 'vue'
import App from './App.vue'
import router from './routes/router'
import store from "./store";
import './registerServiceWorker'
import DashboardPlugin from './plugins/dashboard-plugin';
import axios from "axios";
import VueAxios from "vue-axios";



//axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

// plugin setup
Vue.use(require('vue-moment'));
Vue.use(DashboardPlugin);
Vue.use(VueAxios, axios);

const app = new Vue({
  router: router,
  store: store,
  el: "#app",
  render: h => h(App)
});

store.$app = app;
