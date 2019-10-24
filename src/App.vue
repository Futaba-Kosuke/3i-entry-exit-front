<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify</span>
        <span class="font-weight-light">MATERIAL DESIGN</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        text
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Latest Release</span>
      </v-btn>
    </v-app-bar>

    <v-content>
      <router-view/>
    </v-content>

    <v-footer
      app
      color="primary lighten-1"
      padless
    >
      <TransitionBar/>
    </v-footer>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';
import TransitionBar from './components/TransitionBar';

export default {
  name: 'App',
  components: {
    // HelloWorld,
    TransitionBar,
  },
  data: () => ({
    //
  }),
};
</script>
