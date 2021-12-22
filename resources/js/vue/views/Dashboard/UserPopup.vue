<template>
    <div>
        <login-popup :loginShow="LoginShow" :user="user" />
        <register-popup :registerShow="RegisterShow" :user="user"/>
    </div>
</template>

<script>
import LoginPopup from './user/LoginPopup.vue';
import RegisterPopup from './user/RegisterPopup.vue';

export default {
    components: { 
      LoginPopup,
      RegisterPopup 
    },
    data() {
        return {
            user:{
                first_name: '',
                last_name: '',
                email: '',
                password: ''
            },
            LoginShow: false,
            RegisterShow: false,
        }
    }
};
</script>

<style lang="scss">

</style>