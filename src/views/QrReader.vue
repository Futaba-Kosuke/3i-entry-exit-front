<template>
  <v-container>
    <v-text-field
      v-model="user_name"
      label="ニックネームを入力してね"
      :hint="hintMessage"
      persistent-hint
    />
    <v-col v-if="isSearch()">
      <QrReaderCamera :user_name="user_name"/>
    </v-col>
  </v-container>
</template>

<script>
import QrReaderCamera from '../components/QrReaderCamera'

export default {
  components: {
    QrReaderCamera,
  },
  data () {
    return {
      user_name: '',
      name_list: this.$store.state.name_list,
    }
  },
  computed: {
    hintMessage() {
      if (this.isSearch()) return 'このニックネームは有効です！'
      else return 'このニックネームは無効です！'
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