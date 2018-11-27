<template>
  <v-toolbar app dark fixed color="secondaryDark" v-if="$store.state.showToolbar">
    <v-toolbar-title class="headline text-uppercase">
      <span>admin</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn flat router-link to="/">
        <span class="mr-2">Home</span>
      </v-btn>
      <v-btn flat router-link to="/about">
        <span class="mr-2">About</span>
      </v-btn>
      <v-btn flat router-link to="/authentication/register" v-if="!$store.state.isUserLogin">
        <span class="mr-2">Register</span>
      </v-btn>
      <v-btn flat router-link to="/authentication/login" v-if="!$store.state.isUserLogin">
        <span class="mr-2">Login</span>
      </v-btn>
      <v-btn flat v-if="$store.state.isUserLogin" @click="logout">
        <span class="mr-2">Logout</span>
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
    }
  }
}
</script>

<style lang="scss" scoped>
.v-btn {
  border-radius: 0;
}
.v-toolbar__title.headline {
  letter-spacing: 1px !important;
}
</style>
