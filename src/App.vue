<template>
  <v-app>
    <v-app-bar app dark>
      <v-toolbar-title class="headline text-uppercase">
        <span class="title_font">すーぱーらんきんぐしすてむ</span>
      </v-toolbar-title>
    </v-app-bar>

    <v-content>
      <router-view/>
    </v-content>

    <v-footer
      app
      padless
      dark
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

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Kosugi+Maru&display=swap');
.title_font {
  font-family: 'Kosugi Maru', sans-serif;
  font-weight: bold;
  font-size: 20px;
  letter-spacing: 2px;
  color: #E0FFFF;
}
</style>