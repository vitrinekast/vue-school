<template >
<div class="col-large push-top">
  <h1>{{thread.title}}</h1>
  <div class="post-list">
    <div class="post" v-for="postId in thread.posts">
      <div class="user-info">
        <a href="#" class="user-name">{{users[posts[postId].userId].name}}</a>
        <a href="#">
          <img class="avatar-large" src="http://i.imgur.com/s0AzOkO.png" alt="">
        </a>
        <p class="desktop-only text-small">107 posts</p>
      </div>
      <div class="post-content">
        <div>
          {{posts[postId].text}}
        </div>
      </div>
      <div class="post-date text-faded">
        {{posts[postId].publishedAt}}
      </div>
    </div>
  </div>
</div>
</template>
<script>
import source from '@/data'
console.log(source)
export default {
  props: {
    id: {
      required: true,
      type: String
    }
  },
  data () {
    return {
      thread: source.threads[this.id],
      posts: source.posts,
      users: source.users
    }
  }
}
</script>
<style lang="css" scoped>
</style>
