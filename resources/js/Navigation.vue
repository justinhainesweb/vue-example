<template>
  <nav class="flex items-center justify-between flex-wrap py-6 -mx-3">
    <div class="flex items-center flex-no-shrink text-black mr-6">
      <span class="font-semibold text-xl tracking-tight appName">{{ $appName }}</span>
    </div>
    <div class="block lg:hidden">
      <button
              class="flex items-center px-3 py-2 border rounded text-grey-dark border-black-light hover:text-black hover:border-black">
        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
        </svg>
      </button>
    </div>
    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div class="text-sm lg:flex-grow">
        <a href="#responsive-header"
           class="block mt-4 lg:inline-block lg:mt-0 text-grey-dark hover:text-black mr-4">
          Docs
        </a>
        <a href="#responsive-header"
           class="block mt-4 lg:inline-block lg:mt-0 text-grey-dark hover:text-black mr-4">
          Examples
        </a>
        <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-grey-dark hover:text-black">
          Blog
        </a>
      </div>
      <div class="relative">
        <button
                class="inline-block text-sm px-4 py-3 leading-none no-underline border rounded text-black border-black hover:border-transparent hover:text-white hover:bg-black mt-4 lg:mt-0"
                :class="{'bg-black': loginPopupState, 'text-white': loginPopupState}" @click.prevent="toggleLoginPopup"
                v-if="!authenticated">
          <icon icon="sign-in-alt" class="fill-current"/>
          Sign in
        </button>
        <button
                class="inline-block text-sm px-4 py-2 leading-none no-underline border rounded text-black border-black hover:border-transparent hover:text-white hover:bg-black mt-4 lg:mt-0"
                v-if="authenticated" @click="logout">Logout
        </button>
        <transition name="fadeDown">
          <login-popup v-if="loginPopupState" @onSuccess="closeLoginPopup"
                       v-on-clickaway="closeLoginPopup"></login-popup>
        </transition>
      </div>
    </div>
  </nav>
</template>

<script>
  import {mapActions, mapGetters} from 'vuex';
  import {mixin as clickaway} from 'vue-clickaway';

  export default {
    name: "navigation",
    mixins: [ clickaway ],
    data() {
      return {
        scrolledTop: false,
      };
    },
    computed: {
      ...mapGetters(['loginPopupState', 'authenticated']),
      navClasses() {
        return {
          'border-transparent': !this.scrolledTop,
          'bg-white': this.scrolledTop,
        };
      },
    },
    methods: {
      ...mapActions(['toggleLoginPopup', 'closeLoginPopup', 'logout']),
    },
    mounted() {
      document.addEventListener('scroll', (event) => {
        const scrollTop = (window.pageYOffset || document.scrollTop)  - (document.clientTop || 0);
        if (scrollTop > 10) {
          this.scrolledTop = true;
        } else {
          this.scrolledTop = false;
        }
        this.$forceUpdate();
      });
    },
    beforeDestroy() {
      document.removeEventListener('scroll', (event) => {});
    },
  }
</script>

<style>
  :not(.scrolled ) nav .appName,
  :not(.scrolled ) nav button {
    @apply text-white;
  }

  .scrolled nav .appName,
  .scrolled nav button {
    @apply text-black;
  }

  :not(.scrolled ) nav button {
    @apply border-white;
  }

  .scrolled nav button {
    @apply border-black;
  }
</style>
