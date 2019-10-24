<template>
  <v-container>
    <RankingTable/>
  </v-container>
</template>

<script>
import RankingTable from '../components/RankingTable'

export default {
  name: 'RankingView',
  components: {
    RankingTable,
  }
}
</script>