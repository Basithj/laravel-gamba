<template>
  <div
    container-classes="container-fluid"
    class="navbar-expand top-sports-nav"
  >
    <div class="sigle-prematch-event">
      <b-row>
        <b-col lg="6">
            <div class="mb-4">
              <b-button v-b-toggle.collapse-1-1 class="header-toggle"><h6>1x2 <b-icon icon="caret-down-fill"></b-icon></h6></b-button>
              <b-collapse visible id="collapse-1-1" class="body-toggle">
                <b-row>
                  <b-col lg="4" class="mr-2 px-0 ml-3"><span>Israel</span> <span class="text-white"> | </span> <span class="text-danger">7.00</span></b-col>
                  <b-col lg="4" class="mx-2 px-0"><span>Draw</span> <span class="text-white"> | </span> <span class="text-danger">3.75</span></b-col>
                  <b-col lg="4" class="mx-2 px-0"><span>Austria</span> <span class="text-white"> | </span> <span class="text-danger">1.51</span></b-col>
                </b-row>
              </b-collapse>
            </div>
            <div class="mb-4">
              <b-button v-b-toggle.collapse-1-2 class="header-toggle"><h6>Total <b-icon icon="caret-down-fill"></b-icon></h6></b-button>
              <b-collapse visible id="collapse-1-2" class="body-toggle">
                <b-row class="mb-3">
                  <b-col lg="6" class="mr-2 ml-3 px-0"><span>Under 1</span> <span class="text-white"> | </span> <span class="text-danger">1.094</span></b-col>
                  <b-col lg="6" class="mx-2 px-0"><span>Under 1</span> <span class="text-white"> | </span> <span class="text-danger">4.094</span></b-col>
                </b-row>
                <b-row class="mb-3">
                  <b-col lg="6" class="mr-2 ml-3 px-0"><span>Under 1</span> <span class="text-white"> | </span> <span class="text-danger">1.094</span></b-col>
                  <b-col lg="6" class="mx-2 px-0"><span>Under 1</span> <span class="text-white"> | </span> <span class="text-danger">4.094</span></b-col>
                </b-row>
                <b-row class="mb-3">
                  <b-col lg="6" class="mr-2 ml-3 px-0"><span>Under 1</span> <span class="text-white"> | </span> <span class="text-danger">1.094</span></b-col>
                  <b-col lg="6" class="mx-2 px-0"><span>Under 1</span> <span class="text-white"> | </span> <span class="text-danger">4.094</span></b-col>
                </b-row>
                <b-row class="mb-3">
                  <b-col lg="6" class="mr-2 ml-3 px-0"><span>Under 1</span> <span class="text-white"> | </span> <span class="text-danger">1.094</span></b-col>
                  <b-col lg="6" class="mx-2 px-0"><span>Under 1</span> <span class="text-white"> | </span> <span class="text-danger">4.094</span></b-col>
                </b-row>
                <b-row class="mb-3">
                  <b-col lg="6" class="mr-2 ml-3 px-0"><span>Under 1</span> <span class="text-white"> | </span> <span class="text-danger">1.094</span></b-col>
                  <b-col lg="6" class="mx-2 px-0"><span>Under 1</span> <span class="text-white"> | </span> <span class="text-danger">4.094</span></b-col>
                </b-row>
               </b-collapse>
            </div>
            <div class="mb-4">
              <b-button v-b-toggle.collapse-1-2 class="header-toggle"><h6>1x2 <b-icon icon="caret-down-fill"></b-icon></h6></b-button>
              <b-collapse visible id="collapse-1-2" class="body-toggle">
                <b-row>
                  <b-col lg="4" class="mr-2 px-0 ml-3"><span>Israel</span> <span class="text-white"> | </span> <span class="text-danger">7.00</span></b-col>
                  <b-col lg="4" class="mx-2 px-0"><span>Draw</span> <span class="text-white"> | </span> <span class="text-danger">3.75</span></b-col>
                  <b-col lg="4" class="mx-2 px-0"><span>Austria</span> <span class="text-white">|</span> <span class="text-danger">1.51</span></b-col>
                </b-row>
              </b-collapse>
            </div>
            <div class="mb-4">
              <b-button v-b-toggle.collapse-1-2 class="header-toggle"><h6>Total <b-icon icon="caret-down-fill"></b-icon></h6></b-button>
              <b-collapse visible id="collapse-1-2" class="body-toggle">
                <b-row class="mb-3">
                  <b-col lg="6" class="mr-2 ml-3 px-0"><span>Under 1</span> <span class="text-white"> | </span> <span class="text-danger">1.094</span></b-col>
                  <b-col lg="6" class="mx-2 px-0"><span>Under 1</span> <span class="text-white"> | </span> <span class="text-danger">4.094</span></b-col>
                </b-row>
                <b-row class="mb-3">
                  <b-col lg="6" class="mr-2 ml-3 px-0"><span>Under 1</span> <span class="text-white"> | </span> <span class="text-danger">1.094</span></b-col>
                  <b-col lg="6" class="mx-2 px-0"><span>Under 1</span> <span class="text-white"> | </span> <span class="text-danger">4.094</span></b-col>
                </b-row>
                <b-row class="mb-3">
                  <b-col lg="6" class="mr-2 ml-3 px-0"><span>Under 1</span> <span class="text-white"> | </span> <span class="text-danger">1.094</span></b-col>
                  <b-col lg="6" class="mx-2 px-0"><span>Under 1</span> <span class="text-white"> | </span> <span class="text-danger">4.094</span></b-col>
                </b-row>
                <b-row class="mb-3">
                  <b-col lg="6" class="mr-2 ml-3 px-0"><span>Under 1</span> <span class="text-white"> | </span> <span class="text-danger">1.094</span></b-col>
                  <b-col lg="6" class="mx-2 px-0"><span>Under 1</span> <span class="text-white"> | </span> <span class="text-danger">4.094</span></b-col>
                </b-row>
                <b-row class="mb-3">
                  <b-col lg="6" class="mr-2 ml-3 px-0"><span>Under 1</span> <span class="text-white"> | </span> <span class="text-danger">1.094</span></b-col>
                  <b-col lg="6" class="mx-2 px-0"><span>Under 1</span> <span class="text-white"> | </span> <span class="text-danger">4.094</span></b-col>
                </b-row>
               </b-collapse>
            </div>
        </b-col>
        <b-col lg="6">
            <div class="mb-4">
              <b-button v-b-toggle.collapse-1-2 class="header-toggle"><h6>Total <b-icon icon="caret-down-fill"></b-icon></h6></b-button>
              <b-collapse visible id="collapse-1-2" class="body-toggle">
                <b-row class="mb-3">
                  <b-col lg="6" class="mr-2 ml-3 px-0"><span>Under 1</span> <span class="text-white"> | </span> <span class="text-danger">1.094</span></b-col>
                  <b-col lg="6" class="mx-2 px-0"><span>Under 1</span> <span class="text-white"> | </span> <span class="text-danger">4.094</span></b-col>
                </b-row>
                <b-row class="mb-3">
                  <b-col lg="6" class="mr-2 ml-3 px-0"><span>Under 1</span> <span class="text-white"> | </span> <span class="text-danger">1.094</span></b-col>
                  <b-col lg="6" class="mx-2 px-0"><span>Under 1</span> <span class="text-white"> | </span> <span class="text-danger">4.094</span></b-col>
                </b-row>
                <b-row class="mb-3">
                  <b-col lg="6" class="mr-2 ml-3 px-0"><span>Under 1</span> <span class="text-white"> | </span> <span class="text-danger">1.094</span></b-col>
                  <b-col lg="6" class="mx-2 px-0"><span>Under 1</span> <span class="text-white"> | </span> <span class="text-danger">4.094</span></b-col>
                </b-row>
                <b-row class="mb-3">
                  <b-col lg="6" class="mr-2 ml-3 px-0"><span>Under 1</span> <span class="text-white"> | </span> <span class="text-danger">1.094</span></b-col>
                  <b-col lg="6" class="mx-2 px-0"><span>Under 1</span> <span class="text-white"> | </span> <span class="text-danger">4.094</span></b-col>
                </b-row>
                <b-row class="mb-3">
                  <b-col lg="6" class="mr-2 ml-3 px-0"><span>Under 1</span> <span class="text-white"> | </span> <span class="text-danger">1.094</span></b-col>
                  <b-col lg="6" class="mx-2 px-0"><span>Under 1</span> <span class="text-white"> | </span> <span class="text-danger">4.094</span></b-col>
                </b-row>
               </b-collapse>
            </div>
            <div class="mb-4">
              <b-button v-b-toggle.collapse-1-2 class="header-toggle"><h6>Total <b-icon icon="caret-down-fill"></b-icon></h6></b-button>
              <b-collapse visible id="collapse-1-2" class="body-toggle">
                <b-row class="mb-3">
                  <b-col lg="6" class="mr-2 ml-3 px-0"><span>Under 1</span> <span class="text-white"> | </span> <span class="text-danger">1.094</span></b-col>
                  <b-col lg="6" class="mx-2 px-0"><span>Under 1</span> <span class="text-white"> | </span> <span class="text-danger">4.094</span></b-col>
                </b-row>
                <b-row class="mb-3">
                  <b-col lg="6" class="mr-2 ml-3 px-0"><span>Under 1</span> <span class="text-white"> | </span> <span class="text-danger">1.094</span></b-col>
                  <b-col lg="6" class="mx-2 px-0"><span>Under 1</span> <span class="text-white"> | </span> <span class="text-danger">4.094</span></b-col>
                </b-row>
                <b-row class="mb-3">
                  <b-col lg="6" class="mr-2 ml-3 px-0"><span>Under 1</span> <span class="text-white"> | </span> <span class="text-danger">1.094</span></b-col>
                  <b-col lg="6" class="mx-2 px-0"><span>Under 1</span> <span class="text-white"> | </span> <span class="text-danger">4.094</span></b-col>
                </b-row>
                <b-row class="mb-3">
                  <b-col lg="6" class="mr-2 ml-3 px-0"><span>Under 1</span> <span class="text-white"> | </span> <span class="text-danger">1.094</span></b-col>
                  <b-col lg="6" class="mx-2 px-0"><span>Under 1</span> <span class="text-white"> | </span> <span class="text-danger">4.094</span></b-col>
                </b-row>
                <b-row class="mb-3">
                  <b-col lg="6" class="mr-2 ml-3 px-0"><span>Under 1</span> <span class="text-white"> | </span> <span class="text-danger">1.094</span></b-col>
                  <b-col lg="6" class="mx-2 px-0"><span>Under 1</span> <span class="text-white"> | </span> <span class="text-danger">4.094</span></b-col>
                </b-row>
               </b-collapse>
            </div>
        </b-col>
      </b-row>
          
    </div>
  </div>
</template>
<script>
import { CollapseTransition } from 'vue2-transitions';
import ContentSinglePreMatchPerDay from './ContentSinglePreMatchPerDay';

export default {
  name: 'content-pre-match',
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
