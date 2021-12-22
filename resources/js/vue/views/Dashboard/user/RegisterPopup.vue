<template>
    <b-modal id="register"
        v-model="isOpen"
        body-classes="p-0"
        modal-classes="modal-dialog-centered user-popup"
        hide-footer
        >
        <card type="secondary"
            header-classes="pb-5"
            body-classes="py-lg-0"
            class="border-0">
            <div class="text-center">
            <img src="img/assets/logo.svg" />
            <h3 class="pb-4 text-center">Create your account now</h3>
            </div>
            <form role="form" @submit.prevent="handleSubmit()">
                <b-row>
                    <b-col md="6" sm="12">
                        <div class="mb-3">
                            <label><span class="text-danger">*</span>First name</label>
                            <b-input class="mb-3"
                                placeholder="Type your first name..."
                                name="text"
                                v-model="user.first_name"
                                >
                            </b-input>
                        </div>
                    </b-col>
                    <b-col md="6" sm="12">
                        <div class="mb-3">
                            <label><span class="text-danger">*</span>Last name</label>
                            <b-input class="mb-3"
                                placeholder="Type your last name..."
                                name="text"
                                v-model="user.last_name"
                                >
                            </b-input>
                        </div>
                    </b-col>
                </b-row>
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
                    <base-button native-type="submit" type="danger" class="my-4" >Sign Up</base-button>
                </div>
                <div class="text-center">
                    <span>Already have an account? <b-link v-b-modal.login class="text-danger font-weight-bold" @click="isOpen=false">Login >></b-link></span>
                </div>
            </form>
        </card>
    </b-modal>
</template>

<script>

export default {
    name: 'register-popup',
    props:{
        user: Object,
        RegisterShow: Boolean,
    },
    data(){
      return {
          isOpen: this.RegisterShow
      }
    },
    methods:{
        /*createUser(){
            this.$store.dispatch("setUser", this.user);
            this.isOpen = !this.isOpen;
        }*/
    showScore(score) {
        this.scors = score;
    },

    async handleSubmit() {
            const user = {
                first_name: this.user.first_name,
                last_name: this.user.last_name,
                email: this.user.email,
                password: this.user.password
            };

            const requestOptions = {
                headers: {
                    Accept: "application/vnd.api+json",
                    "Content-Type": "application/vnd.api+json",
                },
            };

            try {
                await this.$store.dispatch("register", { user, requestOptions });
                this.$notify({
                    type: "success",
                    message: "Successfully registered.",
                });
            } catch (error) {
                this.$notify({
                    type: "danger",
                    message: "Oops, something went wrong!",
                });
                this.setApiValidation(error.response.data.errors);
            }
        },
    }
}
</script>

<style lang="scss">

</style>
