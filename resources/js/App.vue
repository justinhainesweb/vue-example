<template>
  <div class="container" id="app">
    <nav class="flex items-center justify-between flex-wrap py-6 -mx-3 mb-16 rounded">
      <div class="flex items-center flex-no-shrink text-black mr-6">
        <span class="font-semibold text-xl tracking-tight">{{ $appName }}</span>
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
            class="inline-block text-sm px-4 py-2 leading-none no-underline border rounded text-black border-black hover:border-transparent hover:text-white hover:bg-black mt-4 lg:mt-0"
            :class="{'bg-black': loginPopupState, 'text-white': loginPopupState}" @click.prevent="toggleLoginPopup" v-if="!authenticated"><font-awesome-icon icon="sign-in-alt" class="fill-current text-green-dark" /> Sign in
          </button>
          <button
            class="inline-block text-sm px-4 py-2 leading-none no-underline border rounded text-black border-black hover:border-transparent hover:text-white hover:bg-black mt-4 lg:mt-0"
            v-if="authenticated" @click="logout">Logout
          </button>
          <transition name="fadeDown">
            <login-popup v-if="loginPopupState" @onSuccess="closeLoginPopup" v-on-clickaway="closeLoginPopup"></login-popup>
          </transition>
        </div>
      </div>
    </nav>

    <div class="row">
      <div class="content w-full">
        <div class="border rounded border-grey-light overflow-hidden relative">
          <div class="overflow-y-auto scrolling-touch" style="max-height: 300px;">
            <table class="relative w-full text-left table-collapse">
              <thead>
                <tr>
                  <th class="z-20 sticky pin-t text-sm font-semibold text-grey-darker bg-grey-lightest p-0" colspan="2">
                    <div class="p-2 border-b border-grey-light">Name</div>
                  </th>
                </tr>
              </thead>
              <tbody class="align-baseline">
                <tr v-for="(object, $index) in websiteList">
                  <td class="p-2 text-xs whitespace-no-wrap" :class="cellStyles($index)">
                    zielonebieganie.pl
                  </td>
                  <td class="whitespace-no-wrap" :class="cellStyles($index)">
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex';
  import { mixin as clickaway } from 'vue-clickaway';

  export default {
    name: "App",
    mixins: [ clickaway ],
    computed: {
      ...mapGetters(['loginPopupState', 'authenticated']),
      websiteList() {
        return [
          1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10
        ];
      },
    },
    methods: {
      ...mapActions(['toggleLoginPopup', 'closeLoginPopup', 'logout']),
      cellStyles($index) {
        return {
          'border-b': $index !== this.websiteList.length - 1,
          'border-grey-light': $index !== this.websiteList.length - 1,
        }
      },
    },
  }
</script>
