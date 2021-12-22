<template>
  <div
    container-classes="container-fluid"
    class="navbar-top navbar-expand top-nav--games"
  >
    <b-nav small class="top-nav-category">
      <b-nav-item class="top-nav-item" :class="navItem.status" v-for="navItem in navItems" :key="navItem.path" :to="navItem.path">
        <span class="icon icon-sm">
          <img :src="convertToHandleize(navItem.text, 'svg')">
        </span>
        <span class="d-inline-block font-weight-light text-wrap align-middle ml-1 text">{{ navItem.text }}</span>
      </b-nav-item>
    </b-nav>
  </div>
</template>
<script>
import { CollapseTransition } from 'vue2-transitions';

export default {
  name: 'dashboard-top-nav-bar',
  components: {
    CollapseTransition
  },
  data() {
    return {
      showActiveGames: false,
      navItems:[
          {
            text: "Turbo Games",
            path: "/1",
            component_name: "dashboard",
            status: ""
          },
          {
            text: "Tomble Live",
            path: "/2",
            component_name: "dashboard",
            status: ""
          },
          {
            text: "Special Games",
            path: "/3",
            component_name: "dashboard",
            status: ""
          },
          {
            text: "Mini Games",
            path: "/4",
            component_name: "dashboard",
            status: ""
          },
          {
            text: "Slot Machine",
            path: "/5",
            component_name: "dashboard",
            status: ""
          },
          { 
            text: "Casino Live",
            path: "/6",
            component_name: "dashboard",
            status: ""
          },
          {
            text: "Virtual Sport",
            path: "/7",
            component_name: "dashboard",
            status: ""
          },
          {
            text: "Running Line",
            path: "/8",
            component_name: "dashboard",
            status: ""
          },
          {
            text: "Sport Betting",
            path: "/9",
            component_name: "dashboard",
            status: "active"
          }
        ],
      
    };
  },
  methods: {
    showGames(){
      //this.showActiveGames = !this.showActiveGames;
    },
    convertToHandleize(text, type){
        return 'img/assets/'+text.toLowerCase().replace(/ /g,'-')+'.'+type;
    }
  }
};
</script>

<style lang="scss">

</style>
