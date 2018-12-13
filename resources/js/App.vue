<template>
  <div id="app">
    <div class="fixed pin-t w-full z-50 transition border-b" :class="navClasses">
      <div class="container">
        <navigation/>
      </div>
    </div>

    <div class="min-h-screen relative bg-no-repeat bg-cover bg-center py-16 flex items-center justify-center overlay-50" :style="`background-image: url('${bg}')`">
      <div class="container">
        <div class="flex mb-4 -mx-3">
          <h1 class="w-full text-white text-display text-center font-black font-heading">Scrape me 🚀</h1>
        </div>
      </div>

      <AlertNew class="pin-b absolute"/>
    </div>

    <div class="min-h-3/4-screen mt-16">
      <div class="container">
        <div class="row mb-8">
          <div class="col-12">
            <h2 id="grid">Grid</h2>
          </div>
        </div>

        <div class="row mb-8">
          <div class="col-1" v-for="(x) in [1,2,3,4,5,6,7,8,9,10,11,12]">
            <div class="rounded border px-3 py-5 bg-grey-lighter text-xs text-center text-grey-dark">.col-1</div>
          </div>
        </div>

        <div class="row mb-8">
          <div class="col-2" v-for="(x) in [1,2,3,4,5,6]">
            <div class="rounded border p-5 bg-grey-lighter text-xs text-center text-grey-dark">.col-2</div>
          </div>
        </div>

        <div class="row mb-8">
          <div class="col-3" v-for="(x) in [1,2,3,4]">
            <div class="rounded border p-5 bg-grey-lighter text-xs text-center text-grey-dark">.col-3</div>
          </div>
        </div>

        <div class="row mb-8">
          <div class="col-4" v-for="(x) in [1,2,3]">
            <div class="rounded border p-5 bg-grey-lighter text-xs text-center text-grey-dark">.col-4</div>
          </div>
        </div>

        <div class="row mb-8">
          <div class="col-6" v-for="(x) in [1,2]">
            <div class="rounded border p-5 bg-grey-lighter text-xs text-center text-grey-dark">.col-6</div>
          </div>
        </div>

        <div class="row mb-8">
          <div class="col-12">
            <div class="rounded border p-5 bg-grey-lighter text-xs text-center text-grey-dark">.col-12</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import AlertNew from "./AlertNew";
  import Navigation from "./Navigation";
  import bg from '@/img/bg.jpg';

  export default {
    name: "App",
    components: {Navigation, AlertNew},
    data() {
      return {
        scrolledTop: false,
      };
    },
    computed: {
      navClasses() {
        return {
          'border-transparent': !this.scrolledTop,
          'bg-white': this.scrolledTop,
          'scrolled': this.scrolledTop,
        };
      },
      linkStyles() {
        return {
          'mt-5': true,
          'inline-block': true,
          'text-indigo': true,
          'text-sm': true,
          'no-underline': true,
        };
      },
      bg() {
        return bg;
      },
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
