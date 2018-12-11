<template>
  <div class="loginPopup max-w-xs min-w-xs absolute pin-r">
    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div class="mb-4">
        <label class="block text-grey-darker text-sm font-bold mb-2" for="username">
          Username
        </label>
        <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
                id="username" type="text" placeholder="Username">
      </div>
      <div class="mb-6">
        <label class="block text-grey-darker text-sm font-bold mb-2" for="password">
          Password
        </label>
        <input
                class="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password" type="password" placeholder="******************">
        <p class="text-red text-xs italic">Please choose a password.</p>
      </div>
      <div class="flex items-center justify-between">
        <button class="bg-grey-darkest hover:bg-black text-white font-normal py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button">
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
  export default {
    name: 'LoginPopup'
  }
</script>

<style scoped>
  .loginPopup {
    top: 125%;
  }
</style>
