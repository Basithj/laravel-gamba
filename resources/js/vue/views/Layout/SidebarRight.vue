  <template>
    <nav class="navbar navbar-vertical fixed-left navbar-expand-md navbar-light sidebar-right px-0">
        <div class="container-fluid">
            <!--Toggler-->
            <navbar-toggle-button @click.native="showSidebar"></navbar-toggle-button>
            <div v-show="$sidebar.showSidebar" class="navbar-collapse collapse show" id="sidenav-collapse-main">
                <div class="navbar-collapse-header d-md-none">
                    <div class="row">
                        <div class="col-6 collapse-brand">
                            <router-link to="/">
                                <img :src="logo">
                            </router-link>
                        </div>
                        <div class="col-6 collapse-close">
                            <navbar-toggle-button @click.native="closeSidebar"></navbar-toggle-button>
                        </div>
                    </div>
                </div>
                <h3 class="category-header">
                  Betting card
                  <div class="bet-settings float-right">
                    <b-button class="p-0 bg-transparent"><i class="fas fa-cog"></i></b-button>
                    <b-button class="p-0 bg-transparent"><i class="fas fa-trash"></i></b-button>
                  </div>
                </h3>
                <b-row>
                  <b-col class="text-danger text-center font-weight-600 text-underline integrated">integrated</b-col>
                  <b-col class="systematic text-center">systematic</b-col>
                </b-row>
                <!--Navigation-->
                <div class="betting-card-items">
                  <ul class="navbar-nav betting-cards mx-0">
                      <li class="nav-item">
                        <BettingCard />
                      </li>
                      <li class="nav-item">
                        <BettingCard />
                      </li>
                      <li class="nav-item">
                        <BettingCard />
                      </li>
                      <li class="nav-item">
                        <BettingCard />
                      </li>
                  </ul>
                </div>
                <ul class="navbar-nav mb-5 betting-card-actions">
                  <li>
                      <div class="betprofit-amount-total">
                        <b-row>
                          <b-col sm="12" class="px-5">
                            <h3 class="category-header">
                              Total
                              <div class="bet-settings float-right">
                                <span class="text-danger">1</span>
                              </div>
                            </h3> 
                          </b-col>
                        </b-row>
                        <b-row>
                          <b-col sm="12" class="px-5">
                            <span class="float-left w-50">Bet</span>
                            <span class="bet-amount w-50 float-left text-right">0.00</span>
                          </b-col>
                        </b-row>
                        <b-row>
                          <b-col sm="12" class="px-5">
                            <span class="float-left w-50">Profit</span>
                            <span class="profit-amount w-50 float-left text-right">0.00</span>
                          </b-col>
                        </b-row>
                      </div>
                      <div class="bet-action-wrapper text-center mt-4">
                        <b-button class="bg-danger px-5">
                          Send
                        </b-button>
                        <b-button class="bg-transparent px-3">
                          Clear
                        </b-button>
                        <div class="bet-limit-wrapper mt-3">
                          <span class="mr-2">Minimum: 25</span><span>Maximum: 10,000</span>
                        </div>
                      </div>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
import NavbarToggleButton from '../../components/NavbarToggleButton'
import BettingCard from '../../components/SidebarPlugin/BettingCard'

export default {
  name: 'sidebar-right',
  components: {
    NavbarToggleButton,
    BettingCard
  },
  props: {
    logo: {
      type: String,
      default: 'img/brand/green.png',
      description: 'Sidebar app logo'
    },
    autoClose: {
      type: Boolean,
      default: true,
      description: 'Whether sidebar should autoclose on mobile when clicking an item'
    }
  },
  provide() {
    return {
      autoClose: this.autoClose
    };
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
    closeSidebar() {
        this.$sidebar.displaySidebar(false)
    },
    showSidebar() {
      this.$sidebar.displaySidebar(true)
    }
  }
};
</script>
<style lang="scss">

</style>
