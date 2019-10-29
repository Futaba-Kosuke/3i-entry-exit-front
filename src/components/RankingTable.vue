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
          { text: '順位', value: 'rank' , sortable: false, },
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
      const ranking_data = this.$store.state.ranking

      let rank = 1;

      // ここでランキングデータを整形
      const result_ranking = ranking_data.map((score) => {
        const minutes = score.play_time.minutes
        const seconds = score.play_time.seconds
        
        // 1分以内にゴールすると分がundefinedになってしまうので
        if (minutes < 0 || seconds < 0) {  // もし万が一何かの間違いでタイムが負になったときの為に
          score.time = '00 : 00'
        } else if (minutes !== undefined) {  // 1分以上でゴールした人用

          // 秒が10未満なら0を挿入
          if (seconds <= 9) score.time = minutes + ' : 0' + seconds
          else score.time = minutes + ' : ' + seconds

          // 分が10未満なら0を挿入
          if (minutes <= 9) score.time = '0' + score.time
        
        } else if (seconds >= 0) {  // 1分以内にゴールした人用

          if (seconds <= 9) score.time = '00' + ' : 0' + seconds
          else score.time = '00' + ' : ' + seconds
        }

        score.rank = rank
        rank++

        return score;
      })

      return result_ranking
    },
  },
}
</script>