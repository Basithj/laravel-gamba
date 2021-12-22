<template>
  <b-card class="px-0 betting-card">
    <b-card-header>
      <span class="cart-title font-weight-600 pb-2 d-inline-block">Turkey-Norway</span>
      <span class="card-subtitle d-inline-block">Gates Uber / Under Choice: Ender (2.5)</span>
      <span class="float-right text-danger text-bet-price">1.67</span>
      <b-button-close>x</b-button-close>
    </b-card-header>
    <b-card-body class="card-content d-flex pt-3 pb-0">
      <span>Total</span>
      <b-input-group>
        <b-input-group-prepend>
          <b-btn variant="outline-info">-</b-btn>
        </b-input-group-prepend>
          <b-form-input type="number" min="0.00" value="25"></b-form-input>
        <b-input-group-append>
          <b-btn variant="outline-secondary">+</b-btn>
        </b-input-group-append>
      </b-input-group>
      <span class="text-success">15,000</span>
    </b-card-body>
    <b-card-footer class="text-center pt-2 pb-0">
        <b-button>50</b-button>
        <b-button>100</b-button>
        <b-button>250</b-button>
        <b-button>250</b-button>
        <b-button class="active">1000</b-button>
    </b-card-footer>
  </b-card>
</template>
<script>
import { CollapseTransition } from 'vue2-transitions';

export default {
  name: 'betting-card',
  components: {
    CollapseTransition
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

