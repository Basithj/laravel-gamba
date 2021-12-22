<template>
    <b-modal id="login"
        body-classes="p-0"
        modal-classes="modal-dialog-centered user-popup"
        hide-footer
        v-model="isOpen"
        >
        <card type="secondary"
            header-classes="pb-5"
            body-classes="py-lg-0"
            class="border-0">
            <div class="text-center">
            <img src="img/assets/logo.svg" />
            <h3 class="pb-4 text-center">Log in to your account</h3>
            </div>
            <form role="form" @submit.prevent="handleSubmit()">
                <div class="mb-3">
                    <label><span class="text-danger">*</span>Email</label>
                    <b-input class="mb-3"
                        placeholder="Type your email..."
                        name="email"
                        v-model="user.email"
                        >
                    </b-input>
                </div>
                <div class="mb-3">
                    <label><span class="text-danger">*</span>Password</label>
                    <b-input 
                        type="password"
                        placeholder="Type your password..."
                        name="password"
                        v-model="user.password"
                        >
                    </b-input>
                </div>
                <div class="text-center">
                    <base-button native-type="submit" type="danger" class="my-4">Sign In</base-button>
                </div>
                <div class="text-center">
                    <span>Dont have an account? <b-link class="text-danger font-weight-bold" v-b-modal.register @click="isOpen=false">Create now >></b-link></span>
                </div>
            </form>
        </card>
    </b-modal>
</template>

<script>

export default {
    name: 'login-popup',
    props:{
        user: Object,
        LoginShow:Boolean
    },
    data(){
      return {
          isOpen: this.LoginShow,
      }
    },
    computed: {
        isAuthenticated: function () {
        return this.$store.getters.isAuthenticated();
        },
    },
    methods:{
        async handleSubmit() {
            const user = {
                email: this.user.email,
                password: this.user.password,
            };

            const requestOptions = {
                headers: {
                    Accept: "application/vnd.api+json",
                    "Content-Type": "application/vnd.api+json",
                },
            };

            try {
                await this.$store.dispatch("login", { user, requestOptions });
                this.isOpen = !this.isOpen;
            } catch (error) {
                this.$notify({
                    type: "danger",
                    message: "Invalid credentials!",
                });
                this.setApiValidation(error.response.data.errors);
            }
        },
    }
}
</script>
