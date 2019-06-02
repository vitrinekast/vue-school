<template lang="html">
  <div class="post" v-if="user">
    <div class="user-info">
      <a href="#" class="user-name">{{ user.name }}</a>
      <a href="#">
        <img class="avatar-large" :src="user.avatar" alt="" />
      </a>
      <p class="desktop-only text-small">{{ userPostsCount }} posts</p>
    </div>
    <div class="post-content">
      <div>
        {{ post.text }}
      </div>
    </div>
    <div class="post-date text-faded">
      <BaseDate :timestamp="post.publishedAt" />
    </div>
  </div>
</template>

<script>

export default {
  props: {
    post: {
      required: true,
      type: Object
    }
  },

  computed: {
    user (user) {
      return this.$store.state.users[this.post.userId]
    },
    userPostsCount () {
      return this.$store.getters.usersPostsCount(this.user['.key'])
    }
  }
}
</script>
