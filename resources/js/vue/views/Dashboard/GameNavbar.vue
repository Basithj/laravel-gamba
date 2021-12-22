<template>
  <div
    container-classes="container-fluid"
    class="navbar-expand top-sports-nav"
  >
    <b-nav small class="sports-nav-category">
      <b-nav-item v-for="sport in sports" :key="sport.path" @click="getEvents(sport.id)">
        <span class="icon icon-sm">
          <img :src="convertToHandleize(sport.name, 'svg')">
        </span>
        <span class="d-block font-weight-light text-wrap align-middle ml-1 text m-auto">{{ sport.name }}</span>
      </b-nav-item>
    </b-nav>
  </div>
</template>
<script>
import { CollapseTransition } from 'vue2-transitions';

export default {
  text: 'game-navbar',
  components: {
    CollapseTransition
  },
  computed: {
    routeName() {
      const { name } = this.$route;
      return this.capitalizeFirstLetter(name);
    },
    sports(){
      //return this.$store.getters.sports;
      return JSON.parse(localStorage.getItem('sports'));
    }
  },
  data() {
    return {
      showActiveGames: false
    };
  },
  methods: {
    showGames(){
      //this.showActiveGames = !this.showActiveGames;
    },
    convertToHandleize(text, type){
        return 'img/assets/'+text.toLowerCase().replace(/ /g,'-')+'.'+type;
    },
    getEvents(id){
      const event = this.$route.params.events;
      this.$store.dispatch('events', {event: 'prematch', 'id': id})
      this.$router.push({ path: "/games/"+event+"/"+params });
    }
  }
};
</script>

<style lang="scss">

</style>
