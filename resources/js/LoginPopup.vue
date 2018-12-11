<template>
  <div class="loginPopup max-w-xs min-w-xs absolute pin-r">
    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div class="mb-4">
        <label class="block text-grey-darker text-sm font-bold mb-2" for="username">
          Username
        </label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
               id="username" name="username" type="text" placeholder="Username" v-model="username" :class="{'border-red': errors.has('username')}">
        <p class="text-red text-xs italic" v-if="errors.has('username')">Please insert a username.</p>
      </div>
      <div class="mb-6">
        <label class="block text-grey-darker text-sm font-bold mb-2" for="password">
          Password
        </label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker mb-3 leading-tight focus:outline-none focus:shadow-outline"
               id="password" name="password" type="password" placeholder="******************" v-model="password" :class="{'border-red': errors.has('password')}">
        <p class="text-red text-xs italic" v-if="errors.has('password')">Please choose a password.</p>
      </div>
      <div class="flex items-center justify-between">
        <button class="bg-grey-darkest hover:bg-black text-white font-normal py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button" @click="login">
          Sign In
        </button>
        <a class="block align-baseline font-bold text-sm text-grey-darkest hover:text-black" href="#">
          Forgot Password?
        </a>
      </div>
    </form>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex';

  export default {
    name: 'LoginPopup',
    data() {
      return {
        username: '',
        password: '',
      }
    },
    methods: {
      login() {
        const data = {
          username: this.username,
          password: this.password,
        };
        this.$store.dispatch('login', data).then(() => {
          if (this.authenticated) {
            this.$emit('onSuccess')
          }
        });
      },
    },
    computed: {
      ...mapGetters(['authenticated']),
    },
  }
</script>

<style scoped>
  .loginPopup {
    top: 125%;
  }
</style>
