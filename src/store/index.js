import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // ランキングデータ
    ranking: [],
    // 名前一覧
    names: [],
    // ポスト時に送信するデータ
    user: {
        user_handle: '',
        condition: '',
        time: '',
    }
  },
  mutations: {
    updateUserData(state, user_data) {
      state.user = user_data
    },
    updateNamesData(state, names_data) {
      state.names = names_data
    },
    updateRankingData(state, ranking_data) {
      state.ranking = ranking_data
    }
  },
  actions: {
  },
  modules: {
  }
})
