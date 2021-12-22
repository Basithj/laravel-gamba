import Vue from "vue";
import router from "../../routes/router";
import { VueAuthenticate } from "vue-authenticate";

import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);
const vueAuth = new VueAuthenticate( Vue.prototype.$http, {
  baseUrl: process.env.VUE_APP_API_BASE_URL,
  tokenName: "access_token",
  loginUrl: "/api/login",
  registerUrl: "/api/register",
  signoutUrl: "/api/logout"
});

export default {
  state: {
    isAuthenticated: localStorage.getItem("vue-authenticate.vueauth_token") !== null
  },

  getters: {
    isAuthenticated(state) {
      return state.isAuthenticated;
    }
  },

  mutations: {
    isAuthenticated(state, payload) {
      state.isAuthenticated = payload.isAuthenticated;
    }
  },

  actions: {
    login(context, payload) {
      return vueAuth.login(payload.user, payload.requestOptions).then(response => {
        console.log(response);
        localStorage.setItem("vue-authenticate.vueauth_token", response.data.token);
        context.commit("isAuthenticated", {
          isAuthenticated: true
        });
        router.push({path: '/live-events'});
      });
    },

    register(context, payload) {
      return vueAuth.register(payload.user, payload.requestOptions).then(response => {
        console.log(response);
        localStorage.setItem("vue-authenticate.vueauth_token", response.data.token);
        context.commit("isAuthenticated", {
          isAuthenticated: true
        });
        router.push({path: '/live-events'});
      });
    },
    async signout(context, payload) {
      console.log(payload.requestOptions)
      
      const logout = await fetch(`/api/logout`,  {
          'method':'POST',
          'headers': payload.requestOptions.headers
        });
    
      const responseUser = await logout.json();
      localStorage.removeItem("vue-authenticate.vueauth_token");
      location.reload();
      return responseUser;
    }
  }
};