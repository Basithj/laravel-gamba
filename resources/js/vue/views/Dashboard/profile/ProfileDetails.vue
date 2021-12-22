<template>
    <div class="mt-4 profile-details">
        <b-form inline @submit.prevent="handleProfileUpdate">
            <b-row class="mb-3">
                <b-col sm="12">
                    <div class="d-flex">
                        <label><span class="text-danger">*</span>First name</label>
                        <b-input
                            placeholder="Type your first name..."
                            name="text"
                            v-model="user.first_name"
                            >
                        </b-input>
                    </div>
                </b-col>
            </b-row>
            <b-row class="mb-3">
                <b-col sm="12">
                    <div class="d-flex">
                        <label><span class="text-danger">*</span>Last name</label>
                        <b-input
                            placeholder="Type your last name..."
                            name="text"
                            v-model="user.last_name"
                            >
                        </b-input>
                    </div>
                </b-col>
            </b-row>
            <b-row class="mb-3">
                <b-col sm="12"  class="d-flex">
                    <label><span class="text-danger">*</span>Email</label>
                    <b-input
                        placeholder="Type your email..."
                        name="email"
                        v-model="user.email"
                        >
                    </b-input>
                </b-col>
            </b-row>
            <b-row class="mb-3">
                <b-col sm="12"  class="d-flex">
                    <label><span class="text-danger">*</span>Phone</label>
                    <b-input
                        placeholder="Phone"
                        name="tel"
                        v-model="user.phone"
                        >
                    </b-input>
                </b-col>
            </b-row>
            <b-row class="mb-3">
                <b-col sm="12" class="d-flex">
                    <label><span class="text-danger">*</span>New Password</label>
                    <b-input 
                        type="password"
                        placeholder="Type your password..."
                        name="password"
                        v-model="user.password"
                        >
                    </b-input>
                </b-col>
            </b-row>
            <b-row class="mb-3">
                <b-col sm="12" class="d-flex">
                    <label><span class="text-danger">*</span>Address</label>
                    <b-input
                        placeholder="Address"
                        name="text"
                        v-model="user.address"
                        >
                    </b-input>
                </b-col>
            </b-row>
            <b-row class="mb-4 mt-2">
                <b-col sm="12" class="d-flex justifiy-content-end float-end">
                    <label></label>
                    <base-button type="danger" @click="clickMe">Update account</base-button>
                </b-col>
            </b-row>
        </b-form>
    </div>
</template>

<script>
export default {
    props:{
        user: Object
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
        clickMe(){
            console.log(this.user)
        },
        rowClass(item, type) {
            if (!item || type !== 'row') return
            if (item.action === 'Withdraw') return 'row-deposit'
        },
        async handleProfileUpdate() {
            if (["1"].includes(this.user.id)) {
                await this.$notify({
                type: "danger",
                message: "You are not allowed not change data of default users.",
                });
                return;
            }
            try {
                await this.$store.dispatch("profile/update", this.user);

                this.resetApiValidation();
                this.$notify({
                    type: "success",
                    message: "Profile updated successfully.",
                });

                await this.$store.getters["profile/me"];
            } catch (error) {
                this.$notify({
                    type: "danger",
                    message: "Oops, something went wrong!",
                });
                this.setApiValidation(error.response.data.errors);
            }
        },
    }
};
</script>