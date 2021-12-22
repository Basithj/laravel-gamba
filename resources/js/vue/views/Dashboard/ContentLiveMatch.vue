<template>
  <div
    container-classes="container-fluid"
    class="navbar-expand top-sports-nav"
  >
    <div>
      <b-card no-body class="game-tally">
        <b-card-text>
          <ContentLiveMatchToday />
        </b-card-text>
      </b-card>
    </div>
  </div>
</template>
<script>
import { CollapseTransition } from 'vue2-transitions';
import ContentLiveMatchToday from './ContentLiveMatchToday';

export default {
  name: 'content-live-match',
  components: {
    CollapseTransition,
    ContentLiveMatchToday
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

