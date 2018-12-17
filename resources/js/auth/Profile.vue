<template>
  <div>
    <h1 class="mb-4">User profile</h1>

    <form action="" @submit.prevent="submit">
      <div class="mb-4">
        <label for="username">Username</label>
        <basic-input type="text" name="username" id="username" />
      </div>
      <div class="mb-4">
        <label for="password">Password</label>
        <basic-input type="password" name="password" id="password" />
      </div>
      <div class="mb-4">
        <label for="email">Email</label>
        <basic-input type="email" name="email" id="email" />
      </div>
      <div class="mb-4">
        <label for="avatar">Avatar</label>
        <basic-input type="file" name="avatar" id="avatar" />
      </div>

      <button class="button button-primary">Submit</button>
    </form>
  </div>
</template>

<script>
  import BasicInput from '../BasicInput';

  export default {
    name: "Profile",
    components: {
      BasicInput,
    },
    methods: {
      submit(e) {
        const url = '/api/v1/users/1/';

        const data = {
        };

        this.$http.patch(url, data).then((res) => {
          console.log(res);
        }).catch((error) => {
          console.error(error);
        })
      },
    },
  }
</script>

<style scoped>

</style>
