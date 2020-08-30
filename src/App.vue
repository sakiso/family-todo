<template>
<div ID="app">
  <v-app>
    <v-app-bar
      app
      color="light-blue darken-3"
      dark
      dense>
      Family Todo
    </v-app-bar>
    <br><br><br>

    <router-view/>


  </v-app>
</div>
</template>

<script>
export default {
  name: 'App',

  components: {
  },

  data: () => ({
    //
  }),
};
</script>

<style>
    #app {
    background-color:#eaeef1
    }
</style>