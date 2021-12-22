import Vue from "vue";

import Jsona from "jsona";

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

  const response = await fetch(`/api/sports`, options);

  const data = await response.json();
  return ({
    data
  });
}

export default {
    get
};