<template>
    <div class="poker-wrapper">
        <b-row class="mt-3">
            <b-col md="5" sm="8">
                <h4 class="poker-title">Player statistics</h4>
                <label>Tournament participation: <span>0</span></label>
                <label>Winning tournaments: <span>0</span></label>
            </b-col>
        </b-row>
        <hr class="mt-3 mb-4"/>
        <b-row class="mb-3">
            <b-col md="5" sm="8">
                <h4>Game statistics</h4>
                <label>Record Games: <span>0</span></label>
                <label>Tournament participation: <span>0</span></label>
                <label>Winning tournaments: <span>0</span></label>
                <label>Tournament win ratio: <span>0%</span></label>
            </b-col>
            <b-col  md="5" sm="8">
                <h4>Moving statistics</h4>
                <label>Folding ratio: <span>0%</span></label>
                <label>Check ratio: <span>0%</span></label>
                <label>Comparison ratio: <span>0%</span></label>
                <label>All-in ratio: <span>0%</span></label>
            </b-col>
        </b-row>
        <b-row>
            <b-col  md="5" sm="8">
                <h4>Hand statistics</h4>
                <label>Number of hands played: <span>0</span></label>
                <label>Winning hands: <span>0</span></label>
                <label>Winning hand ratio: <span>0%</span></label>
            </b-col>
            <b-col  md="5" sm="8">
                <h4>Folding statistics</h4>
                <label>Pre-flop folds: <span>0%</span></label>
                <label>Folds after flop: <span>0%</span></label>
                <label>Folds after Turn: <span>0%</span></label>
            </b-col>
        </b-row>
        
    </div>
</template>

<script>
export default {
    props:{
        pokerDetails: {
            type: Array
        }
    },
    data() {
      return {

      };
    },
    methods: {

    }
};
</script>