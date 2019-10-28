<template>
  <v-container>
    <v-text-field
      v-model="user_name"
      label="ニックネームを入力してね"
      :hint="hintMessage"
      persistent-hint
      :disabled="!isEditable"
    />

    <v-col v-if="isSearch()">
      <QrReaderCamera :user_name="user_name" @entry="entry()" @exit="exit()" @updateNameList="updateNameList()"/>
    </v-col>

    <!-- 入場時に表示するダイアログ -->
    <v-dialog
      v-model="entry_dialog"
      max-width="290"
    >
      <v-card>
        <v-card-title class="headline">Game Start!!</v-card-title>
        <v-card-text>ゲームスタートだ！</v-card-text>
      </v-card>
    </v-dialog>
    <!-- 退場時に表示するダイアログ -->
    <v-dialog
      v-model="exit_dialog"
      max-width="290"
    >
      <v-card>
        <v-card-title class="headline">Game Clear!!</v-card-title>
        <v-card-text>ゲームクリア！おめでとう！</v-card-text>
        <v-btn to="/ranking">ランキング画面へ</v-btn>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import QrReaderCamera from '../components/QrReaderCamera'
import axios from 'axios'

export default {
  components: {
    QrReaderCamera,
  },
  created: async function() {
    const names_data = await axios.get('https://server-3i-entry-exit.herokuapp.com/api/v1/names');
    this.$store.commit('updateNamesData', names_data.data)
    this.name_list = this.$store.state.names
  },
  data () {
    return {
      user_name: this.$store.state.user.user_handle,
      name_list: this.$store.state.names,
      entry_dialog: false,
      exit_dialog: false,
    }
  },
  computed: {
    hintMessage() {
      if (this.isSearch()) return 'このニックネームは有効です！'
      else if (this.user_name === '') return ''
      else return 'このニックネームは既に使われています！'
    },
    isEditable() {
      if (this.$store.state.user.conditions === '入場') {
        return false
      } else {
        return true
      }
    }
  },
  methods: {
    isSearch() {
      if (this.user_name === '') return false
      const result = this.name_list.indexOf(this.user_name)
      return result === -1
    },
    entry() {
      this.entry_dialog = true
    },
    exit() {
      this.exit_dialog = true
    },
    updateNameList() {
      this.name_list = this.$store.state.names
    }
  }
}
</script>