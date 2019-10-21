import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    score_ranking: [
      {
        name: 'futaba',
        play_time: '00:18:00'
      },
      {
        name: 'fukke',
        play_time: '00:20:00',
      }
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
