  <template>
    <side-bar class="left-sidebar">
      <b-navbar-nav class="align-items-center ml-md-auto">
        <!-- This item dont have <b-nav-item> because item have data-action/data-target on tag <a>, wich we cant add -->
        <li class="nav-item d-sm-none">
          <a class="nav-link" href="#" data-action="search-show" data-target="#navbar-search-main">
            <i class="ni ni-zoom-split-in"></i>
          </a>
        </li>
      </b-navbar-nav>
      <b-form class="navbar-search form-inline mr-sm-3 mb-2"
            id="navbar-search-main">
        <b-form-group class="mb-0">
          <b-input-group class="input-group-alternative input-group-merge">
            <b-form-input placeholder="Search" type="text"> </b-form-input>

            <div class="input-group-append">
              <span class="input-group-text"><i class="fas fa-search"></i></span>
            </div>
          </b-input-group>
        </b-form-group>
      </b-form>
      <div class="left-sidebar-mainctrl">
        <b-button>All</b-button>
        <b-button>6H</b-button>
        <b-button>12H</b-button>
        <b-button>18H</b-button>
        <b-button>10</b-button>
      </div>
      <hr/>
      <h3 class="category-header">Soccer</h3>
      <b-nav class="m-0">
        <b-nav-item v-for="sport in sports" :key="sport.id" @click="getEvents(sport.id)">
          <img :src="convertToHandleize( sport.name, 'svg')" /> {{ sport.name  }}
          <span class="float-right"></span>
        </b-nav-item>
      </b-nav>
      <h3 class="category-header">Countries</h3>
      <b-nav class="m-0">
        <b-nav-item v-for="country in countries" :key="country.path" :to="country.path">
          <img :src="convertToHandleize(country.name, 'svg')" /> {{ country.name }}
          <span class="float-right">{{ country.counter }}</span>
        </b-nav-item>
      </b-nav>
    </side-bar>
</template>

<script>
import NavbarToggleButton from '../../components/NavbarToggleButton'

export default {
  name: 'sidebar-left',
  components: {
    NavbarToggleButton
  },
  props: {
    autoClose: {
      type: Boolean,
      default: true,
      description: 'Whether sidebar should autoclose on mobile when clicking an item'
    }
  },
  computed:{
    sports(){
      return JSON.parse(localStorage.getItem('sports'));
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
      searchQuery: '',
      countries:[
        {
          name: "Israel",
          counter: 20,
          path: "/8",
          component_name: "dashboard"
        },
        {
          name: "Germany",
          counter: 20,
          path: "/9",
          component_name: "dashboard"
        },
        {
          name: "Europe",
          counter: 20,
          path: "/10",
          component_name: "dashboard"
        },
        {
          name: "Germany",
          counter: 20,
          path: "/11",
          component_name: "dashboard"
        },
        {
          name: "Europe",
          counter: 20,
          path: "/12",
          component_name: "dashboard"
        },
        {
          name: "Germany",
          counter: 20,
          path: "/14",
          component_name: "dashboard"
        },
        {
          name: "Europe",
          counter: 20,
          path: "/15",
          component_name: "dashboard"
        },
        {
          name: "Germany",
          counter: 20,
          path: "/16",
          component_name: "dashboard"
        }
      ],
    };
  },
  methods: {
    closeSidebar() {
        this.$sidebar.displaySidebar(false)
    },
    showSidebar() {
      this.$sidebar.displaySidebar(true)
    },
    convertToHandleize(text, type){
        return 'img/assets/'+text.toLowerCase().replace(/ /g,'-')+'.'+type;
    },
    getEvents(id){
      const event = this.$route.params.events;
      this.$store.dispatch('events', {event: 'prematch', 'id': id})
      this.$router.push({ path: "/games/"+event+"/"+id });
    }
  }
};
</script>
<style lang="scss">

</style>
