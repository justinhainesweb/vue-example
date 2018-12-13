<template>
  <div id="app">
    <div class="fixed pin-t w-full z-50 transition border-b" :class="navClasses">
      <div class="container">
        <navigation/>
      </div>
    </div>

    <div class="min-h-screen relative bg-no-repeat bg-cover bg-center py-16 flex items-center justify-center overlay-50" :style="`background-image: url('${bg}')`">
      <div class="container">
        <div class="row">
          <h1 class="w-full text-white text-display text-center font-black font-heading">Scrape me 🚀</h1>
        </div>
      </div>

      <AlertNew class="pin-b absolute"/>
    </div>

    <div>
    </div>

    <div class="min-h-3/4-screen">

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
