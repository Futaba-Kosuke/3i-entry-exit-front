<template>
  <v-container>
    <v-text-field
      v-model="user_name"
      label="ニックネームを入力してね"
      :hint="hintMessage"
      persistent-hint
    />
    <v-col v-if="isSearch()">
      <QrReaderCamera :user_name="user_name" @toggleDialog="dialog = true"/>
    </v-col>
    <v-dialog
      v-model="dialog"
      max-width="290"
    >
      <v-card>
        <v-card-title class="headline">Game Start!!</v-card-title>
        <v-card-text>ゲームスタートだ！</v-card-text>
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
      user_name: '',
      name_list: this.$store.state.names,
      dialog: false,
    }
  },
  computed: {
    hintMessage() {
      if (this.isSearch()) return 'このニックネームは有効です！'
      else if (this.user_name === '') return ''
      else return 'このニックネームは既に使われています！'
    }
  },
  methods: {
    isSearch() {
      if (this.user_name === '') return false
      const result = this.name_list.indexOf(this.user_name)
      return result === -1
    },
  }
}
</script>