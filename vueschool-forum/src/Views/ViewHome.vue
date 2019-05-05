<template>
<div class="col-full">
    <h1>Welcome to the forum</h1>
    <ThreadList :threads="threads"/>
</div>
</template>

<script>
import source from '@/data'
import ThreadList from '@/components/ThreadList'

export default {
  data () {
    return {
      threads: Object.values(source.threads),
      posts: source.posts,
      users: source.users
    }
  },
  components: {
    ThreadList
  }
}
</script>
