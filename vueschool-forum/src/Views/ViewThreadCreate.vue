<template lang="html">
  <div class="col-full push-top" v-if="forum">

    <h1>Create new thread in <i>{{forum.name}}</i></h1>


    <ThreadEditor @save="save" />

  </div>
</template>

<script>
import { mapActions } from 'Vuex'
import ThreadEditor from '@/components/ThreadEditor'

export default {
  components: {
    ThreadEditor
  },
  props: {
    forumId: {
      type: String,
      required: true
    }
  },

  computed: {
    forum () {
      return this.$store.state.forums[this.forumId]
    }
  },
  methods: {
    ...mapActions(['createThread', 'fetchForum']),

    save ({title, text}) {
      const thread = {
        forumId: this.forum['.key'],
        text,
        title
      }

      this.createThread(thread).then((thread) => {
        this.$router.push({
          name: 'ThreadShow',
          params: {
            id: thread['.key']
          }
        })
      })
        // dispatch action
      this.$router.push({

      })
    }
  },

  created () {
    this.fetchForum({id: this.forumId})
  }
}
</script>

<style lang="css" scoped>
</style>
