<template>
  <b-row>
    <b-col sm="12">
      <b-card no-body class="bg-transparent single-prematch-card">
        <img src="img/assets/shutterstock_1291798447.png" class="w-100"/>
        <b-card-body>
          <div class="single-prematch-country">
            <div class="flag-left d-flex">
              <img src="img/flags/israel.svg" width="26" class="mr-2"/>
              <span class="mt-3">Bulgaria</span>
            </div>
            <div class="middle-box-vs d-block m-auto">
              <div class="d-flex justify-content-center">
                <span class="pipe-divider">|</span>
                <span class="mx-2">
                  <span class="d-block w-100 game-date">Friday, Oct 8 - 1pm</span>
                  <span class="game-venue">Bloomfield Stadium</span>
                </span>
                <span class="pipe-divider">|</span>
              </div>
            </div>
            <div class="flag-left d-flex">
              <span class="mt-3">Norway</span>
              <img src="img/flags/israel.svg" width="26" class="ml-2"/>
            </div>
          </div>
        </b-card-body>
      </b-card>
    </b-col>
  </b-row>
</template>
<script>
import { CollapseTransition } from 'vue2-transitions';
import ContentSinglePreMatchPerDay from './ContentSinglePreMatchPerDay';

export default {
  name: 'single-live-match-main-card',
  components: {
    CollapseTransition,
    ContentSinglePreMatchPerDay
  },
  computed: {
    routeName() {
      const { name } = this.$route;
      return this.capitalizeFirstLetter(name);
    }
  },
  data() {
    return {
      showActiveGames: false,
    };
  },
  methods: {
    showGames(){
      //this.showActiveGames = !this.showActiveGames;
    }
  }
};
</script>
