<template lang="html">
  <div class="forum-listing">
    <div class="forum-details">
      <router-link :to="{ name: 'Forum', params: {id: forum['.key']} }" class='text-xlarge'>{{forum.name}}</router-link>

      <p>{{forum.description}}</p>
    </div>

    <div class="threads-count">
      <p class="count">{{threadsCount}}</p> threads
    </div>

    <div class="last-thread">

    </div>
  </div>

</template>

<script>
import { CountObjectPropLength } from '@/utils'

export default {
  props: {
    forum: {
      required: true,
      type: Object
    }
  },
  computed: {
    threadsCount () {
      return CountObjectPropLength(this.forum.threads)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
