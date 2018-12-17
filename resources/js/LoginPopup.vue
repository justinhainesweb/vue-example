<template>
  <div class="loginPopup max-w-xs min-w-xs absolute pin-r z-40">

    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div class="mb-4">
        <label class="block text-grey-darker text-sm font-bold mb-2" for="username">
          Username
        </label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
               id="username" name="username" type="text" placeholder="Username" v-validate="'required'" v-model="username" :class="{'border-red': errors.has('username'), 'mb-3': errors.has('username')}">
        <p class="text-red text-xs italic" v-if="errors.has('username')">Please insert a username.</p>
      </div>
      <div class="mb-6">
        <label class="block text-grey-darker text-sm font-bold mb-2" for="password">
          Password
        </label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
               id="password" name="password" type="password" placeholder="*****" v-validate="'required'" v-model="password" :class="{'border-red': errors.has('password'), 'mb-3': errors.has('password')}">
        <p class="text-red text-xs italic" v-if="errors.has('password')">{{ $t('password.change') }}</p>
      </div>
      <div class="flex items-center justify-between">
        <button class="bg-grey-darkest hover:bg-black text-white font-normal py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button" @click="authenticate">
          Sign In
        </button>
        <a class="block align-baseline font-bold text-sm text-grey-darkest hover:text-black" href="#">
          {{ $t('password.forgot') }}
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
      authenticate() {
        const date = new Date();
        const payload = {
          username: this.username,
          password: this.password,
          exp: Date.now() + (7 * 24 * 60 * 60 * 1000),
        };

        this.$validator.validateAll().then((result) => {
          if (!result) {
            return;
          }

          this.$http.post(this.$store.state.endpoints.obtainJWT, payload).then((response) => {
            this.$store.commit('updateToken', response.data.access);
            // get and set auth user
            const base = {
              baseURL: this.$store.state.endpoints.baseUrl,
              headers: {
                // Set your Authorization to 'JWT', not Bearer!!!
                Authorization: `JWT ${this.$store.state.jwt}`,
                'Content-Type': 'application/json'
              },
              xhrFields: {
                withCredentials: true
              }
            };
            // Even though the authentication returned a user object that can be
            // decoded, we fetch it again. This way we aren't super dependant on
            // JWT and can plug in something else.
            const axiosInstance = this.$http.create(base);
            axiosInstance({
              url: `/user-id-by-username/${payload.username}/`,
              method: "get",
              params: {}
            }).then((response) => {
              this.$store.commit("setAuthUser", {
                authUser: response.data,
                isAuthenticated: true
              });
              this.$router.push({name: 'Home'})
            });
            this.$emit('onSuccess');
          }).catch((error) => {
            console.log(error);
            console.debug(error);
            console.dir(error);
          });
        }).catch((err) => {
          console.error(err);
        });
      }
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
