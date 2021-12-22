<template>
  <b-row>
    <b-col xl="4" sm="6">
      <b-card class="mb-4 bg-light pre-match-card">
        <b-card-body>
          <h5 class="px-3 text-center text-white mb-3">International Youth Enrichment / U21 Euro</h5>
          <div class="pre-match-country">
            <div class="flag-left">
              <img src="img/theme/team-4.jpg" width="26"/>
              Bulgaria
            </div>
            <div class="middle-box-vs">VS</div>
            <div class="flag-right">
              <img src="img/theme/team-4.jpg" width="26"/>
              Norway
            </div>
          </div>
        </b-card-body>
        <template slot="footer">
          <b-row>
            <b-col>
              <div class="w-100 label-score">
                <span class="float-left">1</span>
                <span class="float-right">1.04</span>
              </div>
            </b-col>
            <b-col>
              <div class="w-100 label-score">
                <span class="float-left">1</span>
                <span class="float-right">1.04</span>
              </div>
            </b-col>
            <b-col>
              <div class="w-100 label-score">
                <span class="float-left">1</span>
                <span class="float-right">1.04</span>
              </div>
            </b-col>
          </b-row>
        </template>
      </b-card>
    </b-col>
    <b-col xl="4" sm="6">
        <b-card class="mb-4 bg-light pre-match-card today">
        <b-card-body>
          <h5 class="px-3 text-center text-white mb-3">International Youth Enrichment / U21 Euro</h5>
          <div class="pre-match-country">
            <div class="flag-left">
              <img src="img/theme/team-4.jpg" width="26"/>
              Bulgaria
            </div>
            <div class="middle-box-vs">VS</div>
            <div class="flag-right">
              <img src="img/theme/team-4.jpg" width="26"/>
              Norway
            </div>
          </div>
        </b-card-body>
        <template slot="footer">
          <b-row>
            <b-col>
              <div class="w-100 label-score">
                <span class="float-left">1</span>
                <span class="float-right">1.04</span>
              </div>
            </b-col>
            <b-col>
              <div class="w-100 label-score">
                <span class="float-left">1</span>
                <span class="float-right">1.04</span>
              </div>
            </b-col>
            <b-col>
              <div class="w-100 label-score">
                <span class="float-left">1</span>
                <span class="float-right">1.04</span>
              </div>
            </b-col>
          </b-row>
        </template>
      </b-card>
    </b-col>
    <b-col xl="4" sm="6">
      <b-card class="mb-4 bg-light pre-match-card">
        <b-card-body>
          <h5 class="px-3 text-center text-white mb-3">International Youth Enrichment / U21 Euro</h5>
          <div class="pre-match-country">
            <div class="flag-left">
              <img src="img/theme/team-4.jpg" width="26"/>
              Bulgaria
            </div>
            <div class="middle-box-vs">VS</div>
            <div class="flag-right">
              <img src="img/theme/team-4.jpg" width="26"/>
              Norway
            </div>
          </div>
        </b-card-body>
        <template slot="footer">
          <b-row>
            <b-col>
              <div class="w-100 label-score">
                <span class="float-left">1</span>
                <span class="float-right">1.04</span>
              </div>
            </b-col>
            <b-col>
              <div class="w-100 label-score">
                <span class="float-left">1</span>
                <span class="float-right">1.04</span>
              </div>
            </b-col>
            <b-col>
              <div class="w-100 label-score">
                <span class="float-left">1</span>
                <span class="float-right">1.04</span>
              </div>
            </b-col>
          </b-row>
        </template>
      </b-card>
    </b-col>
  </b-row>
</template>
<script>
import { CollapseTransition } from 'vue2-transitions';
import ContentPreMatchPerDay from './ContentPreMatchPerDay';

export default {
  name: 'live-match-main-card',
  components: {
    CollapseTransition,
    ContentPreMatchPerDay
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
