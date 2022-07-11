<template>
  <button v-if="!isAuth" @click="logIn">LogIn</button>
  <button v-else @click="logOut">LogOut</button>
</template>

<script>
export default {
  methods: {
    logIn() {
      this.$store.dispatch('logIn');
    },
    logOut() {
      this.$store.dispatch('logOut');
    },
  },
  computed: {
    isAuth() {
      return this.$store.getters.getAuth;
    },
  },
};
</script>
