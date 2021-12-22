<template>
  <div
    container-classes="container-fluid"
    class="navbar-expand top-sports-nav"
  >
    <div>
      <b-card no-body class="game-tally">
        <b-tabs card>
          <b-tab title="Tommorow" active @click="showEvents(date)">
            <b-card-text>
                <ContentPreMatchPerDay :events="events" />
            </b-card-text>
          </b-tab>
          <b-tab title="Today">
            <b-card-text>
              <ContentPreMatchPerDay />
            </b-card-text>
          </b-tab>
          <b-tab title="14/10">
            <b-card-text>
              <ContentPreMatchPerDay />
            </b-card-text>
          </b-tab>
          <b-tab title="13/10">
            <b-card-text>
              <ContentPreMatchPerDay />
            </b-card-text>
          </b-tab>
          <b-tab title="12/10">
            <b-card-text>
              <ContentPreMatchPerDay />
            </b-card-text>
          </b-tab>
          <b-tab title="11/10">
            <b-card-text>
              <ContentPreMatchPerDay />
            </b-card-text>
          </b-tab>
          <b-tab title="10/10">
            <b-card-text>
              <ContentPreMatchPerDay />
            </b-card-text>
          </b-tab>
        </b-tabs>
      </b-card>
    </div>
  </div>
</template>
<script>
import { CollapseTransition } from 'vue2-transitions';
import ContentPreMatchPerDay from './ContentPreMatchPerDay';

export default {
  name: 'content-pre-match',
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
      showActiveGames: false
    };
  },
  methods: {
    showGames(){
      //this.showActiveGames = !this.showActiveGames;
    },
    showEvents(date){
      const id = this.$route.params.id;
      this.$store.dispatch('events', {event: 'prematch', 'id': id})
    }
  }
};
</script>
