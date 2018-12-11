<template>
  <div class="container" id="app">
    <nav class="flex items-center justify-between flex-wrap bg-grey-lightest p-6 -mx-3 mb-5 rounded">
      <div class="flex items-center flex-no-shrink text-black mr-6">
        <span class="font-semibold text-xl tracking-tight">{{ $t("app") }}</span>
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
          <button class="inline-block text-sm px-4 py-2 leading-none no-underline border rounded text-black border-black hover:border-transparent hover:text-white hover:bg-black mt-4 lg:mt-0" :class="{'bg-black': showLoginPopup, 'text-white': showLoginPopup}" @click.prevent="toggleLoginPopup">Sign in</button>
          <transition name="fadeDown">
            <LoginPopup v-if="showLoginPopup"></LoginPopup>
          </transition>
        </div>
      </div>
    </nav>

    <div class="row">
      <div class="sidebar w-full xl:w-1/5">
      </div>
      <div class="content w-full xl:w-4/5">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur eligendi incidunt perspiciatis sapiente
          vitae! A adipisci asperiores dolorem ea eligendi facilis fugit id, officiis quia quos recusandae rem soluta,
          tempore.</p>
      </div>
    </div>

  </div>
</template>

<script>
  import LoginPopup from "./LoginPopup.vue";
  import {mapGetters, mapActions} from 'vuex';

  export default {
    name: "App",
    components: {LoginPopup},
    computed: {
      ...mapGetters(['showLoginPopup']),
    },
    methods: {
      ...mapActions(['toggleLoginPopup']),
    },
  }
</script>
