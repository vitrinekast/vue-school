<template lang="html">
  <header class="header" id="header">

    <router-link class='logo' :to="{ name: 'Home', params: {} }">
      <img src="../assets/img/vueschool-logo.svg">
    </router-link>


    <div class="btn-hamburger">
      <!-- use .btn-humburger-active to open the menu -->
      <div class="top bar"></div>
      <div class="middle bar"></div>
      <div class="bottom bar"></div>
    </div>

    <!-- use .navbar-open to open nav -->
    <nav class="navbar">
      <ul>

        <li class="navbar-user" v-if="user">
          <router-link :to="{ name: 'Profile', params: {} }">

            <img class="avatar-small" :src="user.avatar" alt="">
            <span>
              {{user.name}}
              <img class="icon-profile" src="../assets/img/arrow-profile.svg" alt="">
            </span>
          </router-link>

          <!-- dropdown menu -->
          <!-- add class "active-drop" to show the dropdown -->
          <div id="user-dropdown">
            <div class="triangle-drop"></div>
            <ul class="dropdown-menu">
              <li class="dropdown-menu-item">
                <router-link :to="{ name: 'Profile', params: {} }">View profile</router-link>
              </li>
              <li class="dropdown-menu-item"><a href="#">Log out</a></li>
            </ul>
          </div>
        </li>
      </ul>

      <ul>
        <!-- <li class="navbar-item">
          <a href="index.html">Home</a>
        </li>
        <li class="navbar-item">
          <a href="category.html">Category</a>
        </li>
        <li class="navbar-item">
          <a href="forum.html">Forum</a>
        </li>
        <li class="navbar-item">
          <a href="thread.html">Thread</a>
        </li> -->
        <!-- Show these option only on mobile-->
        <li class="navbar-item mobile-only">
          <router-link :to="{ name: 'Profile', params: {} }">My profile</router-link>
        </li>
        <li class="navbar-item mobile-only">
          <a href="#">Logout</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
  import { mapGetters } from 'Vuex'

  export default {
    computed: {
      ...mapGetters({
        'user': 'authUser'
      })
    }
  }
</script>

<style lang="css" scoped>
</style>
