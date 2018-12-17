<template>
  <nav class="flex items-center justify-between flex-wrap py-6 -mx-3">
    <a class="flex items-center flex-no-shrink mr-6 no-underline" :class="logoClasses" href="/">
      <span class="font-semibold text-xl tracking-tight appName">{{ $appName }}</span>
    </a>
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
        <a href="#grid" :class="linkClasses"
           class="block mt-4 lg:inline-block lg:mt-0 mr-4">
          Grid
        </a>
        <a href="#buttons" :class="linkClasses"
           class="block mt-4 lg:inline-block lg:mt-0">
          Buttons
        </a>
      </div>
      <div class="relative">
        <button class="inline-block text-sm leading-none no-underline rounded py-3 px-2"
                :class="linkClasses"
                @click.prevent="toggleLoginPopup"
                v-if="!isAuthenticated">
          <icon icon="sign-in-alt" class="fill-current"/>
          Sign in
        </button>

        <template v-if="isAuthenticated">
          <button class="inline-block text-sm leading-none no-underline rounded py-3 px-2" v-dropdown="'nav_auth'" :class="linkClasses">Profile</button>
          <div class="dropdown-menu hidden">
            <button class="inline-block text-sm text-black leading-none no-underline rounded py-3 px-2"
                    @click="logout">Logout</button>
          </div>
        </template>

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
    mixins: [clickaway],
    data() {
      return {
        scrolledTop: false,
      };
    },
    computed: {
      ...mapGetters(['loginPopupState', 'isAuthenticated']),
      navClasses() {
        return {
          'border-transparent': !this.scrolledTop,
          'bg-white': this.scrolledTop,
        };
      },
      logoClasses() {
        return {
          'text-white': !this.scrolledTop,
          'text-black': this.scrolledTop,
        };
      },
      linkClasses() {
        return {
          'text-grey-dark': true,
          'hover:text-white': !this.scrolledTop,

          // When nav is fixed top with background
          'hover:text-black': this.scrolledTop,
        };
      },
    },
    methods: {
      ...mapActions(['toggleLoginPopup', 'closeLoginPopup', 'logout']),
    },
    mounted() {
      document.addEventListener('scroll', (event) => {
        const scrollTop = (window.pageYOffset || document.scrollTop) - (document.clientTop || 0);
        if (scrollTop > 10) {
          this.scrolledTop = true;
        } else {
          this.scrolledTop = false;
        }
        this.$forceUpdate();
      });
    },
    beforeDestroy() {
      document.removeEventListener('scroll', (event) => {
      });
    },
  }
</script>
