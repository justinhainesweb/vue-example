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

    <div class="mt-16">
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
          <div class="col-12 lg:col-4 mb-4 lg:mb-0" v-for="(x) in [1,2,3]">
            <div class="rounded border p-5 bg-grey-lighter text-xs text-center text-grey-dark">.col-4</div>
          </div>
        </div>

        <div class="row mb-8">
          <div class="col-12 lg:col-6 mb-4 lg:mb-0" v-for="(x) in [1,2]">
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

    <div class="mt-16">
      <div class="container">
        <div class="row mb-8">
          <div class="col-12">
            <h2 id="buttons">Buttons</h2>
          </div>
        </div>

        <div class="row mb-8">
          <div class="col-12">
            <button @click.stop.prevent class="button">Button</button>
            <button @click.stop.prevent class="button button-light">Button light</button>
            <button @click.stop.prevent class="button button-primary">Button primary</button>
            <button @click.stop.prevent class="button button-red">Button red</button>
            <button @click.stop.prevent class="button button-green">Button green</button>
            <button @click.stop.prevent class="button block w-full mt-1 button-light">Button block</button>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-16">
      <div class="container">
        <div class="row mb-8">
          <div class="col-12">
            <h2 id="code">Code</h2>
          </div>
        </div>

        <div class="row mb-8">
          <div class="col-12">
            <prism class="bg-grey-lightest rounded px-8 py-7 my-5 text-sm" language="javascript" :code="'document.addEventListener(\'scroll\', (event) => {\n'+
'  const scrollTop = (window.pageYOffset || document.scrollTop) - (document.clientTop || 0);\n'+
'  if (scrollTop > 10) {\n'+
'    this.scrolledTop = true;\n'+
'  } else {\n'+
'    this.scrolledTop = false;\n'+
'  }\n'+
'  this.$forceUpdate();\n'+
'});'"></prism>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-16">
      <div class="container">
        <div class="row mb-8">
          <div class="col-12">
            <profile></profile>
          </div>
        </div>
      </div>
    </div>


    <footer class="bg-grey-lightest py-16 mt-32">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="text-center flex items-center justify-center flex-col">
              <a href="/" class="no-underline text-indigo-dark hover:text-indigo-darkest font-semibold text-xl tracking-tight appName">{{ $appName }}</a>
              <a href="https://github.com/rafalolszewski94/pyscrapper"
                 class="no-underline text-black font-semibold text-xl tracking-tight mt-4"
                 title="GitHub repository" target="_blank">
                <icon :icon="['fab', 'github']"></icon>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
  import AlertNew from "./AlertNew";
  import Navigation from "./Navigation";
  import bg from '@/img/bg.jpg';
  import Profile from './auth/Profile';

  export default {
    name: "Home",
    components: {Navigation, AlertNew, Profile},
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
