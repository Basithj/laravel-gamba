<template>
    <div>
        <b-modal id="profile"
            body-classes="p-0"
            modal-classes="modal-dialog-centered profile-modal"
            hide-footer
            v-model="profileShow"
            >
            <div class="container">
                <b-row>
                    <b-col md="4" class="accountInfo">
                        <user-profile-account-info />
                    </b-col>
                    <b-col mb="8" class="px-5 pt-3">
                        <b-card no-body>
                            <b-tabs card pills justified>
                                <b-tab title="Wallet" active>
                                    <b-card-text>
                                        <wallet :walletDetails="walletActionItems" />
                                    </b-card-text>
                                </b-tab>
                                <b-tab title="History">
                                    <b-card-text>
                                        <history :historyDetails="historyItems"/>
                                    </b-card-text>
                                </b-tab>
                                <b-tab title="Details">
                                    <b-card-text>
                                        <profile-details :user="userData"/>
                                    </b-card-text>
                                </b-tab>
                                <b-tab title="Poker">
                                    <b-card-text>
                                        <poker />
                                    </b-card-text>
                                </b-tab>
                            </b-tabs>
                        </b-card>
                    </b-col>
                </b-row>
            </div>
        </b-modal>
    </div>
</template>

<script>
import History from './profile/History.vue';
import Poker from './profile/Poker.vue';
import ProfileDetails from './profile/ProfileDetails.vue';
import UserProfileAccountInfo from './profile/UserProfileAccountInfo.vue';
import Wallet from './profile/Wallet.vue';
export default {
    components: { 
        UserProfileAccountInfo,
        Wallet,
        History,
        ProfileDetails,
        Poker
    },
    data() {
        return {
            profileShow: false,
            walletActionItems: [
                { date:'02/10/2021', amount: '+800.00', action: 'Deposit' },
                { date:'02/10/2021', amount: '-10.00', action: 'Withdraw' }
            ],
            user:{},
            historyItems: [
                { date:'02/10/2021', 's_w': 'SW 1', game: 'Soccer' , odd: 'Odd 1', status:'Pending'},
                { date:'02/10/2021', 's_w': 'SW 2', game: 'Basketball' , odd: 'Odd 2', status:'Done'},
                { date:'02/10/2021', 's_w': 'SW 1', game: 'Soccer' , odd: 'Odd 1', status:'Pending'},
                { date:'02/10/2021', 's_w': 'SW 2', game: 'Basketball' , odd: 'Odd 2', status:'Done'},
                { date:'02/10/2021', 's_w': 'SW 1', game: 'Soccer' , odd: 'Odd 1', status:'Pending'},
                { date:'02/10/2021', 's_w': 'SW 2', game: 'Basketball' , odd: 'Odd 2', status:'Done'},
                { date:'02/10/2021', 's_w': 'SW 1', game: 'Soccer' , odd: 'Odd 1', status:'Pending'},
                { date:'02/10/2021', 's_w': 'SW 2', game: 'Basketball' , odd: 'Odd 2', status:'Done'},
            ],
            userData: {
                first_name: null,
                last_name: null,
                email: null,
                phone: null,
                address: null
            }
        }
    },
    
    created() {
        this.getProfile();
        this.userData = this.user;
        console.log(this.userData);
    },
    methods: {
        async getProfile() {
            //await this.$store.dispatch("profile/me");
            //this.user = await { ...this.$store.getters["profile/me"] };
            const token =localStorage.getItem("vue-authenticate.vueauth_token");
            const options = {
                headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "Authorization" : "Token "+ token
                }
            };

            const getUser = await fetch(`/api/users`, {
                headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization' : 'Bearer '+ token
                }
            });

            const responseUser = await getUser.json();
            this.user = responseUser;
            console.log(this.user);
        }
    },
};
</script>

<style lang="scss">
    

</style>