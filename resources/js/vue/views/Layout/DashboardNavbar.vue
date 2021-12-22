<template>
  <base-nav
    container-classes="container-fluid"
    class="navbar-top navbar-expand"
    :class="{'navbar-dark': type === 'default'}"
  >
    <div class="row main-header-row">
      <div class="col-6">
          <router-link to="/">
              <img :src="logo" width="162">
          </router-link>
      </div>
      <div class="col-6">
        <b-navbar-nav class="align-items-center ml-auto ml-md-0 float-right">
          <base-dropdown menu-on-right
                        class="nav-item"
                        tag="li"
                        title-tag="a"
                        title-classes="nav-link pr-0">
            <a href="#" class="nav-link pr-0 mt-2" @click.prevent slot="title-container">
              <font-awesome-icon icon="cog" />
            </a>
            <template>
              <b-dropdown-item href="#!">
                <b-dropdown id="dropdown-odds" html="<img src='img/flags/israel.svg' />" class="bg-transparent sub-dropdown">
                  <b-dropdown-item><img src="img/flags/israel.svg" /> Israel</b-dropdown-item>
                </b-dropdown>
              </b-dropdown-item>
              <b-dropdown-item href="#!">
                <b-form-checkbox switch class="float-right"></b-form-checkbox>
                <span>Sounds</span>
              </b-dropdown-item>
              <div class="dropdown-divider"></div>
              <b-dropdown-item href="#!">
                <b-form-checkbox switch class="float-right"></b-form-checkbox>
                <span>Feed</span>
              </b-dropdown-item>
              <div class="dropdown-divider"></div>
              <b-dropdown-item href="#!">
                <b-dropdown id="dropdown-odds" text="Odds" class="bg-transparent sub-dropdown">
                  <b-dropdown-item>Odds 1</b-dropdown-item>
                  <b-dropdown-item>Odds 2</b-dropdown-item>
                  <b-dropdown-item>Odds 3</b-dropdown-item>
                </b-dropdown>
              </b-dropdown-item>
              <div class="dropdown-divider"></div>
              <b-dropdown-item href="#!">
                  <b-dropdown id="dropdown-timezone" text="GMT (3.00)" class="bg-transparent sub-dropdown">
                    <b-dropdown-item>GMT (4.00)</b-dropdown-item>
                    <b-dropdown-item>GMT (5.00)</b-dropdown-item>
                    <b-dropdown-item>GMT (6.00)</b-dropdown-item>
                  </b-dropdown>
              </b-dropdown-item>
              <div class="dropdown-divider"></div>
              <b-dropdown-item href="#!">
                <i class="fas fa-mobile-alt"></i>
                <span>Mobile Version</span>
              </b-dropdown-item>
            </template>
          </base-dropdown>
        </b-navbar-nav>
        <div class="d-flex float-right pe-auto" v-if="auth"  v-b-modal.profile>
            <div class="mr-3 text-right mt-1">
              <span class="userName d-block">Player Player</span>
              <span class="text-danger">$0.00</span>
            </div>
            <img src="img/assets/profile-demo.png" width="56">
        </div>
        <b-button class="login-btn bg-transparent float-right mr-2 mt-2" v-b-modal.login v-else>Log in</b-button>
      </div>
    </div>
  </base-nav>
</template>
<script>
import { CollapseTransition } from 'vue2-transitions';
import { BaseNav, Modal } from '../../components';

export default {
  components: {
    CollapseTransition,
    BaseNav,
    Modal
  },
  props: {
    type: {
      type: String,
      default: 'default',
      description: 'Look of the dashboard navbar. Default (Green) or light (gray)'
    },
    logo: {
      type: String,
      default: 'img/assets/logo.svg'
    },
  },
  computed: {
    routeName() {
      const { name } = this.$route;
      return this.capitalizeFirstLetter(name);
    },
    auth(){
      return this.$store.getters.isAuthenticated;
    }
  },

  data() {
    return {
      activeNotifications: false,
      showMenu: false,
      searchModalVisible: false,
      searchQuery: ''
    };
  },
  methods: {
    capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
    toggleNotificationDropDown() {
      this.activeNotifications = !this.activeNotifications;
    },
    closeDropDown() {
      this.activeNotifications = false;
    }
  }
};
</script>
