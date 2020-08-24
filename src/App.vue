<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
      dense>
      Family Todo
    </v-app-bar>
    <br><br><br>

    <router-view/>


  </v-app>
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
