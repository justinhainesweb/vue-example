<template>
  <div class="flex flex-col items-center justify-center w-full min-w-full min-h-screen">
    <h1 class="font-heading text-display-4 font-black text-indigo">404</h1>
    <p class="font-heading font-medium">Page not found</p>

    <router-link class="no-underline text-black text-xs uppercase mt-4 px-3 py-2 rounded border hover:bg-grey-light" :to="{name: 'Home'}">Go to home</router-link>
  </div>
</template>

<script>
  export default {
    name: "NotFound"
  }
</script>

<style scoped>

</style>
