<template>
  <div>
    <base-header class="pt-3 pb-0 px-0">
      <!-- Card stats -->
      <SinglePreMatchMainCard />
    </base-header>
    <b-container fluid class="">
      <!--Tables-->
      <b-row class="mt-4">
        <b-col xs="12" class="mb-5 px-0">
          <ContentPreMatch />
        </b-col>
      </b-row>
      <!--End tables-->
    </b-container>

  </div>
</template>
<script>
  // Components
  import BaseProgress from '../components/BaseProgress';
  import StatsCard from '../components/Cards/StatsCard';

  import SinglePreMatchMainCard from './Dashboard/SinglePreMatchMainCard';
  import GameNavbar from './Dashboard/GameNavbar';
  import ContentPreMatch from './Dashboard/ContentSinglePreMatch';

  export default {
    components: {
      BaseProgress,
      StatsCard,
      GameNavbar,
      ContentPreMatch,
      SinglePreMatchMainCard
    },
    data() {
      return {
      };
    },
    methods: {
    },
    mounted() {

    }
  };
</script>
