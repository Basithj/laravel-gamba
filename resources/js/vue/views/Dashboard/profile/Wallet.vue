<template>
    <div class="wallet">
        <div class="withdraw-wrapper">
            <h4>Withdraw</h4>
            <span>To withdraw balance you need to contact your agent.</span>
        </div>
        <div class="deposit-wrapper">
            <h4>Deposit</h4>
            <span>To deposit into your balance contact your agent.</span>
        </div>
        <div class="wallet-action-wrapper">
            <h4>Wallet Action</h4>
            <b-table 
                :items="walletDetails"
                :fields="fields"
                :tbody-tr-class="rowClass"
            >
            </b-table>
        </div>
        <div class="crypto-wrapper">
            <ul class="d-flex justify-content-between w-100 mt-4 px-0 mb-0">
                <li>
                    <img src="img/assets/crypto-logo/bitcoin.svg"/>
                </li>
                <li>
                    <img src="img/assets/crypto-logo/ethereum.svg"/>
                </li>
                <li>
                    <img src="img/assets/crypto-logo/bitcoin-cash.svg"/>
                </li>
                <li>
                    <img src="img/assets/crypto-logo/ripple.svg"/>
                </li>
                <li>
                    <img src="img/assets/crypto-logo/litecoin.svg"/>
                </li>
                <li>
                    <img src="img/assets/crypto-logo/ardor.svg"/>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        walletDetails: {
            type: Array
        }
    },
    data() {
      return {
        fields: [
          { key: 'date', label: 'Date', sortable: true, sortDirection: 'desc' },
          { key: 'amount', label: 'Amount'},
          { key: 'action', label: 'Action', sortable: true}
        ],
      };
    },
    methods: {
      rowClass(item, type) {
        if (!item || type !== 'row') return
        if (item.action === 'Withdraw') return 'row-deposit'
      }
    }
};
</script>
