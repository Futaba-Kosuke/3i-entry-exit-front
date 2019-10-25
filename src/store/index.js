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
    name_list: [
      'niba', 'test_user_name'
    ],
    user: {
        user_handle: '',
        condition: '',
        time: '',
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
