<template>
  <div>
    <base-header class="py-3 px-0">
      <!-- Card stats -->
      <PreMatchMainCard />
    </base-header>
    <b-container fluid class="px-0">
      <GameNavbar />
    </b-container>
    <b-container fluid class="">
      <!--Tables-->
      <b-row class="mt-4">
        <b-col xs="12" class="mb-5 px-0">
          <ContentLiveMatch />
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

  import PreMatchMainCard from './Dashboard/PreMatchMainCard';
  import GameNavbar from './Dashboard/GameNavbar';
  import ContentLiveMatch from './Dashboard/ContentLiveMatch';

  export default {
    components: {
      BaseProgress,
      StatsCard,
      GameNavbar,
      ContentLiveMatch,
      PreMatchMainCard
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
