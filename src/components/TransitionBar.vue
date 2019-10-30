<template>
  <v-row
    justify="space-around"
    no-gutters
  >
    <v-btn to="/" text color="#E0FFFF" class="my-2 btn_font" exact>QR読み込み</v-btn>
    <v-btn to="/ranking" text color="#E0FFFF" class="my-2 btn_font" exact>ランキング</v-btn>
  </v-row>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Kosugi+Maru&display=swap');
.btn_font {
  font-family: 'Kosugi Maru', sans-serif;
  font-weight: bold;
  letter-spacing: 2px;
}
</style>