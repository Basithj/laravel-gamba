<template>
    <div class="text-center d-block account-info px-4 pb-3">
        <span class="img-profile d-block m-auto pt-5 pb-2">
            <img src="img/assets/profile-demo.png" class="rounded-circle"/>
        </span>
        <span class="name d-block">Player Player</span>
        <span class="total-balance d-block mb-5">$0.00</span>
        <hr class="my-3" />
        <span class="last-login d-block">Last Login</span>
        <span class="last-login-date d-block">2021-10-10 16:31:56</span>
        <hr class="my-3" />
        <span class="signup-text d-block">Signup Date</span>
        <span class="signup-date d-block">2021-08-13 14:19:31</span>
        <hr class="mb-2" />
        <span>
            <b-link class="logout" @click="logout">Logout</b-link>
        </span>
    </div>
</template>

<script>
export default {
    props:{
        accountInfo: {
            type: Object
        }
    },
    data() {
      return {
        profileShow: false
      }
    },
    methods:{
        async logout() {

            const requestOptions = {
                headers: {
                    Accept: "application/vnd.api+json",
                    "Content-Type": "application/vnd.api+json",
                    "Authorization": "Bearer "+localStorage.getItem("vue-authenticate.vueauth_token")
                },
            };

            try {
                await this.$store.dispatch("signout", { requestOptions });
            } catch (error) {
                console.log(error)
            }
        }
    }
};
</script>