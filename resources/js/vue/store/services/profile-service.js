import Vue from "vue";
import VueCryptojs from 'vue-cryptojs';

import axios from "axios";
import Jsona from "jsona";

Vue.use(VueCryptojs);

const url = process.env.VUE_APP_API_BASE_URL;
const jsona = new Jsona();

async function get() {
  const token =localStorage.getItem("vue-authenticate.vueauth_token");
  const options = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Authorization" : "Bearer "+ token
    }
  };

  const getUser = await fetch(`/api/users`, options);

  const responseUser = await getUser.json();
  return ({
    user:responseUser
  });
}

function update(profile) {
  const token = localStorage.getItem("vue-authenticate.vueauth_token");

  const payload = jsona.serialize({
    stuff: profile,
    includeNames: []
  });

  const options = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Authorization" : "Bearer "+ token
    }
  };

  return axios
    .put(`/users/update`, payload, options)
    .then(response => {
      return jsona.deserialize(response.data);
    });
}

export default {
  get,
  update
};