<template lang="html">
  <div class="col-3 push-top">
    <div class="profile-card">

      <p class="text-center">
        <img :src="currentUser.avatar" alt="" class="avatar-xlarge img-update">
      </p>

      <div class="form-group">
        <input type="text" v-model="currentUser.username"   placeholder="Username" class="form-input text-lead text-bold">
      </div>

      <div class="form-group">
        <input type="text"  v-model="currentUser.name"  placeholder="Full Name" class="form-input text-lead">
      </div>
      <div class="form-group">
        <label for="user_bio">Bio</label>
        <textarea class="form-input" id="user_bio"  v-model="currentUser.bio"  placeholder="Write a few words about yourself."></textarea>
      </div>

      <div class="stats">
        <span>{{userPostsCount}} posts</span>
        <span>{{userThreadCount}} threads</span>
      </div>

      <hr>

      <div class="form-group">
        <label class="form-label" for="user_website">Website</label>
        <input autocomplete="off"  v-model="currentUser.website"  class="form-input" id="user_website">
      </div>

      <div class="form-group">
        <label class="form-label" for="user_email">Email</label>
        <input autocomplete="off"  v-model="currentUser.email"  class="form-input" id="user_email">
      </div>

      <div class="form-group">
        <label class="form-label" for="user_location">Location</label>
        <input autocomplete="off"  v-model="currentUser.location"  class="form-input" id="user_location">
      </div>

      <div class="btn-group space-between">
        <button @click.prevent="close" class="btn-ghost">Cancel</button>
        <button type="submit" @click.prevent="save" class="btn-blue">Save</button>
      </div>
    </div>

    <p class="text-xsmall text-faded text-center">Member since june 2003, last visited 4 hours ago</p>
  </div>
</template>

<script>
import { mapActions } from 'Vuex'

export default {
  props: {
    user: {
      required: true,
      type: Object
    }
  },
  methods: {
    ...mapActions(['setUser', 'fetchForums']),

    save () {
      this.$store.setUser({...this.currentUser})
      this.$router.push({name: 'Profile'})
    },
    close () {
      this.$router.push({name: 'Profile'})
    }
  },
  computed: {
    userPostsCount () {
      return this.$store.getters.usersPostsCount(this.user['.key'])
    },
    userThreadCount () {
      return this.$store.getters.userThreadCount(this.user['.key'])
    }
  },
  data () {
    return {
      currentUser: {...this.user}
    }
  }
}
</script>

<style lang="css" scoped>
</style>
