import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    score_ranking: [
      {
        "name": "niba",
        "play_time": {
          "minutes": 1,
          "seconds": 52,
          "milliseconds": 128.719
        }
      },
      {
        "name": "test_user_name",
        "play_time": {
          "minutes": 2,
          "seconds": 29,
          "milliseconds": 477.441
        }
      }
    ],
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
      state.names = names_data;
    }
  },
  actions: {
  },
  modules: {
  }
})
