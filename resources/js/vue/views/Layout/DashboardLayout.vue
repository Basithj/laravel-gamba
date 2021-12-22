<template>
  <div class="container-fluid">
    <header>
      <DashboardNavbar />
    </header>
    <b-row class="main-row">
      <b-col :md="2" class="pl-0 left-sidebar-wrapper">
        <SidebarLeft />
      </b-col>
      <b-col :md="8" class="main-wrapper px-0">
        <DashboardTopNavbar />
        <div class="main-content-wrapper">
          <div class="main-content">
            <div @click="$sidebar.displaySidebar(false)">
              <fade-transition :duration="200" origin="center top" mode="out-in">
                <!-- your content here -->
                <router-view></router-view>
              </fade-transition>
            </div>
          </div>
        </div>
      </b-col>
      <b-col class="pr-0 col-md-2 right-sidebar-wrapper">
        <SidebarRight />
      </b-col>
    </b-row>
    
    <user-profile />
    <user-popup />

    <user-profile-description />
  </div>
</template>
<script>
  /* eslint-disable no-new */
  import PerfectScrollbar from 'perfect-scrollbar';
  import 'perfect-scrollbar/css/perfect-scrollbar.css';

  import DashboardNavbar from './DashboardNavbar.vue';
  import SidebarRight from './SidebarRight.vue';
  import SidebarLeft from './SidebarLeft.vue'
  import DashboardTopNavbar from './DashboardTopNavbar.vue';
  import ContentFooter from './ContentFooter.vue';
  import DashboardContent from './Content.vue';
  import { FadeTransition } from 'vue2-transitions';
  import UserPopup from '../Dashboard/UserPopup.vue';
  import UserProfile from '../Dashboard/UserProfile.vue';
  import UserProfileDescription from '../Dashboard/UserProfileDescription.vue';

  function hasElement(className) {
    return document.getElementsByClassName(className).length > 0;
  }

  function initScrollbar(className) {
    if (hasElement(className)) {
      new PerfectScrollbar(`.${className}`);
    } else {
      // try to init it later in case this component is loaded async
      setTimeout(() => {
        initScrollbar(className);
      }, 100);
    }
  }

  export default {
    components: {
      DashboardNavbar,
      SidebarRight,
      SidebarLeft,
      DashboardTopNavbar,
      ContentFooter,
      DashboardContent,
      FadeTransition,
      UserPopup,
      UserProfile,
      UserProfileDescription
    },
    methods:{
      initScrollbar() {
        let isWindows = navigator.platform.startsWith('Win');
        if (isWindows) {
          initScrollbar('left-sidebar');
          initScrollbar('main-content-wrapper');
          initScrollbar('betting-card-items');
          initScrollbar('top-nav-category');
          initScrollbar('sports-nav-category');
        }
      }
    },
    data() {
      return {
        showActiveGames: false
      };
    },
    computed:{

    },
    mounted() {
      this.initScrollbar();
      this.$store.dispatch('sports');
    }
  };
</script>
