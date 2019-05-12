<template lang="html">
  <form class="" @submit.prevent='save'>
    <div class="form-group">
      <textarea
      name="name"
      class='form-input'
      rows="8"
      cols="80"
      v-model="text"
      ></textarea>
    </div>
    <div class="form-action">
      <button class="btn-blue">submit post</button>
    </div>
  </form>
</template>

<script>
export default {
  props: {
    threadId: {
      required: true
    }
  },
  data () {
    return {
      text: ''
    }
  },
  methods: {

    save () {
      const post = {
        text: this.text,
        threadId: this.threadId
      }

      this.text = ''

      this.$emit('save', {
        post
      })
    }
  }
}
</script>

<style lang="css" scoped>
</style>
