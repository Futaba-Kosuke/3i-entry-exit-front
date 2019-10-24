<template>
<div>
  <v-data-table
    :headers="headers"
    :items="ranking_data"
    :items-per-page="50"
    class="elevation-1"
  ></v-data-table>
</div>
</template>

<script>
export default {
  name: 'RankingTable',
  data () {
    return {
      headers: [
          {
            text: 'ユーザー名',
            align: 'left',
            sortable: false,
            value: 'name',
          },
          { text: 'タイム', value: 'time' },
      ],
    }
  },
  computed: {
    ranking_data() {
      const score_ranking = this.$store.state.score_ranking

      const result_ranking = score_ranking.map((score) => {
        score["time"] = score["play_time"]["minutes"] + ':' + score["play_time"]["seconds"];
        return score;
      })

      return result_ranking
    },
  },
}
</script>