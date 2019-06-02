<template>
  <div class="col-large push-top" v-if='thread && user'>
    <h1>{{thread.title}}</h1>
    <p>

      By <a href="#" class="link-unstyled">{{user.name}}</a>,
      <BaseDate :timestamp="thread.publishedAt" />.
      <span style="float:right; margin-top: 2px;" class="hide-mobile text-faded text-small">3 replies by 3 contributors</span>
    </p>
    <PostList :posts="posts" />

    <PostEditor :threadId="id" @save="addPost" />
  </div>
</template>
<script>
import { mapActions } from 'Vuex'
import PostList from '@/components/PostList'
import PostEditor from '@/components/PostEditor'

export default {
  components: {
    PostList,
    PostEditor
  },
  props: {
    id: {
      required: true,
      type: String
    }
  },
  computed: {
    user () {
      return this.$store.state.users[this.thread.userId]
    },
    thread () {
      return this.$store.state.threads[this.id]
    },
    posts () {
      const postIds = Object.values(this.thread.posts)
      return Object.values(this.$store.state.posts)
        .filter(post => postIds.includes(post['.key']))
    }
  },
  methods: {
    ...mapActions(['fetchThread', 'fetchUser', 'fetchPosts']),

    addPost ({ post }) {
      this.$store.dispatch('addPost', post)
    }
  },

  created () {
    this.fetchThread({id: this.id})
      .then(thread => {
        this.fetchUser({id: thread.userId})
        this.fetchPosts({ids: Object.values(thread.posts)})
          .then((posts) => {
            posts.forEach(post => this.fetchUser({id: post.userId}))
          })
      })
  }

}
</script>
<style lang="css" scoped>
</style>
