<template lang="html">

  <div class="forum-list">
    <h2 class="list-title">
      <router-link :to="{ name: 'Category', params: {id: category['.key']} }">{{category.name}}</router-link>
    </h2>

    <ForumListItem
    v-for="forum in forums"
    :forum="forum"
    :key="forum['.key']" />
  </div>

</template>

<script>
import ForumListItem from '@/components/ForumListItem'
import { CountObjectPropLength } from '@/utils'

export default {
  components: {
    ForumListItem
  },
  props: {
    category: {
      required: true,
      type: Object
    }
  },
  computed: {
    threadsCount () {
      return CountObjectPropLength(this.forum.threads)
    },
    forums () {
      const forumIds = Object.keys(this.category.forums)
      return Object.values(this.$store.state.forums).filter(forum => forumIds.includes(forum['.key']))
    }

  }
}
</script>

<style lang="css" scoped>
</style>
