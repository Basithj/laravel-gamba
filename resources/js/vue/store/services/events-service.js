import Jsona from "jsona";
import { constant } from "lodash";

const jsona = new Jsona();

async function get(payload) {
  const token = localStorage.getItem("vue-authenticate.vueauth_token");
  const options = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Authorization" : "Bearer "+ token
    }
  };
  console.log(payload);
  const response = await fetch(`/api/games/`+payload.event+`/`+payload.id, options);

  const data = await response.json();
  return ({
    data
  });
}

async function getByDate(payload) {
  const token = localStorage.getItem("vue-authenticate.vueauth_token");
  const options = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Authorization" : "Bearer "+ token
    }
  };
  console.log(payload);
  const page = payload.page;
  const date = payload.date;

  const response = await fetch(`/api/games/`+payload.event+`/`+payload.id+'?page='+page+'&date='+date, options);

  const data = await response.json();
  return ({
    data
  });
}

export default {
  get,
  getByDate
};