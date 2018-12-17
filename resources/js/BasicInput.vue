<template>
  <input class="transition outline-none focus:outline-none border border-transparent focus:bg-white focus:border-grey-light placeholder-grey-darkest rounded bg-grey-lighter py-2 px-4 mt-1 block w-full appearance-none leading-normal ds-input" @input="input">
</template>

<script>
  export default {
    name: "BasicInput",
    methods: {
      input(event) {
        this.$emit('input', event.target.value);
      },
    },
  }
</script>
