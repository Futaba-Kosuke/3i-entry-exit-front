<template>
  <div>
    <p class="error">{{ error }}</p>
    <!-- <p class="decode-result">Last result: <b>{{ result }}</b></p> -->
    <qrcode-stream @decode="onDecode" @init="onInit" />
  </div>
</template>

<script>
import { QrcodeStream } from 'vue-qrcode-reader'
import axios from 'axios'

export default {
  components: { QrcodeStream },
  props: {
    user_name: String,
  },
  data () {
    return {
      result: '',
      error: ''
    }
  },
  methods: {
    async onDecode (result) {
      this.result = result
      if (result === '3ihyuks3ihyuks') {
        const user_data = {
          user_handle: this.user_name,
          conditions: '入場',
          time: new Date().getHours() + ':' + new Date().getMinutes(),
        }
        this.$store.commit('updateUserData', user_data)
        await axios.post('https://server-3i-entry-exit.herokuapp.com/api/v1/post_time', this.$store.state.user);
      }
      // else if (this.result === '3ikargt3ikargt') {
      // }
    },

    async onInit (promise) {
      try {
        await promise
      } catch (error) {
        if (error.name === 'NotAllowedError') {
          this.error = "ERROR: you need to grant camera access permisson"
        } else if (error.name === 'NotFoundError') {
          this.error = "ERROR: no camera on this device"
        } else if (error.name === 'NotSupportedError') {
          this.error = "ERROR: secure context required (HTTPS, localhost)"
        } else if (error.name === 'NotReadableError') {
          this.error = "ERROR: is the camera already in use?"
        } else if (error.name === 'OverconstrainedError') {
          this.error = "ERROR: installed cameras are not suitable"
        } else if (error.name === 'StreamApiNotSupportedError') {
          this.error = "ERROR: Stream API is not supported in this browser"
        }
      }
    }
  }
}
</script>