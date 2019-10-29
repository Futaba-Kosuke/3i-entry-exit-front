<template>
  <v-container>
    <RankingTable/>
  </v-container>
</template>

<script>
import RankingTable from '../components/RankingTable'
import axios from 'axios'

export default {
  name: 'RankingView',
  components: {
    RankingTable,
  },
  created: async function() {
    const ranking_data = await axios.get('https://server-3i-entry-exit.herokuapp.com/api/v1/ranking')
    this.$store.commit('updateRankingData', ranking_data.data)
  }
}
</script>