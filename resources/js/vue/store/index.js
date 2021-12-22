/*mport Vue from 'vue';
import Vuex from 'vuex';
import VueCryptojs from 'vue-cryptojs';

Vue.use(VueCryptojs);
Vue.use(Vuex);

const api = 'http://127.0.0.1:8000';

let tken = '';
if(localStorage.getItem("token")){
    tken = Vue.CryptoJS.AES.decrypt(localStorage.getItem("token"), 'user').toString(Vue.CryptoJS.enc.Utf8);
}

console.log(tken);
const headers = { 
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': 'Bearer '+tken
 };
 const genericHeaders = { 
    'Accept': 'application/json',
    'Content-Type': 'application/json'
};

export default new Vuex.Store({
    state:{
        auth:false,
        _token: '',
        user:{
            first_name: '',
            last_name: '',
            email: '',
            phone:'',
            address: ''
        }
    },
    mutations:{
        setAuth(state, payload){
            if(payload != undefined){
                state.auth = true;
                state._token = payload;
            } else {
                state.auth = false;
                state._token = '';
            }
        },
        setProfile(state, payload){
            console.log(payload);
            state.user = payload;
        }
    },
    actions:{
        async setUser(state, payload){
            
            const data = {
                first_name: payload.first_name,
                last_name: payload.last_name,
                email: payload.email,
                password: payload.password
            }
            const request = {
                method: "POST",
                headers: genericHeaders,
                body: JSON.stringify(data)
            };
            const register = await fetch(api+'/api/register', request );
            const response = await register.json();

            const tken = Vue.CryptoJS.AES.encrypt(response.token, "user").toString();
            localStorage.setItem("token", tken);
            state.commit('setAuth', response.token);

            state.dispatch('getUser');
        },
        async login(state, payload){
            const headers = { 
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            };
            const data = {
                email: payload.email,
                password: payload.password
            }
            const request = {
                method: "POST",
                headers: genericHeaders,
                body: JSON.stringify(data)
            };
            const login = await fetch(api+'/api/login', request );
            const response = await login.json();

            const tken = Vue.CryptoJS.AES.encrypt(response.token, "user").toString();
            localStorage.setItem("token", tken);

            state.commit('setAuth', response.token);

            state.dispatch('getUser');
        },
        async getUser(state){
            tken = Vue.CryptoJS.AES.decrypt(localStorage.getItem("token"), 'user').toString(Vue.CryptoJS.enc.Utf8);
            const headers = { 
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+tken
            };
            const profile = await fetch(api+'/api/users', {headers} );
            const response = await profile.json();
            state.commit('setProfile', response);
        }
    },
    modules:{},
    getters:{
        getAuth: state => state.auth,
        getToken: state => state._token,
        getProfile: state => state.user
    }
});*/

import Vue from "vue";
import Vuex from "vuex";

import auth from "./modules/auth";
import profile from "./modules/profile-module";
import reset from "./modules/reset";
import sports from "./modules/sports";
import events from "./modules/events";

import VueCryptojs from 'vue-cryptojs';

Vue.use(VueCryptojs);
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    profile,
    reset,
    sports,
    events
  }
});