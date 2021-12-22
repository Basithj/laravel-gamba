<template>
  <div>
    <base-header class="py-3 px-0">
      <!-- Card stats -->
      <keep-alive>       
        <component :is="eventTypeBanner"></component>  
      </keep-alive>   
    </base-header>
    <b-container fluid class="px-0">
      <GameNavbar />
    </b-container>
    <b-container fluid class="">
      <!--Tables-->
      <b-row class="mt-4">
        <b-col xs="12" class="mb-5 px-0">
           <keep-alive>       
            <component :is="eventTypeContent"></component>  
          </keep-alive>
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

  import GameNavbar from './Dashboard/GameNavbar';
  import ContentPreMatch from './Dashboard/ContentPreMatch';
  import ContentLiveMatch from './Dashboard/ContentLiveMatch';
  import ContentSinglePreMatch from './Dashboard/ContentSinglePreMatch';

  import PreMatchMainCard from './Dashboard/PreMatchMainCard';
  import LiveMatchMainCard from './Dashboard/LiveMatchMainCard';

  import SinglePreMatchMainCard from './Dashboard/SinglePreMatchMainCard';
  import SingleLiveMatchMainCard from './Dashboard/SingleLiveMatchMainCard';

  export default {
    components: {
      BaseProgress,
      StatsCard,
      GameNavbar,
      ContentPreMatch,
      PreMatchMainCard,
      LiveMatchMainCard,
      ContentLiveMatch,
      SinglePreMatchMainCard,
      SingleLiveMatchMainCard,
      ContentSinglePreMatch
    },
    data() {
      return {
      };
    },
    computed: {     
      eventTypeBanner() {    
        //console.log(this.$route.params)   
        switch(this.$route.params.events){
          case 'prematch-events': 
            return 'pre-match-main-card';       
          case 'live-events':
            return 'live-match-main-card';  
          case 'single-live-events':
            return 'single-live-match-main-card'; 
          case 'single-prematch-events':
            return 'single-pre-match-main-card'; 
        }
      },
      eventTypeContent() {    
        //console.log(this.$route.params)   
        switch(this.$route.params.events){
          case 'prematch-events': 
            return 'content-pre-match';       
          case 'live-events':
            return 'content-live-match';  
          case 'single-live-events':
            return 'content-single-pre-match'; 
          case 'single-prematch-events':
            return 'content-single-pre-match'; 
        }
      }    
    },
    methods: {

    },
    mounted() {
    }
  };
</script>
