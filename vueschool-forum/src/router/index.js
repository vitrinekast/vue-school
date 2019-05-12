import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/Views/ViewHome'
import ThreadShow from '@/Views/ViewThreadShow'
import ThreadCreate from '@/Views/ViewThreadCreate'
import Profile from '@/Views/ViewProfile'
import Category from '@/Views/ViewCategory'
import NotFound from '@/Views/ViewNotFound'
import Forum from '@/Views/ViewForum'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/me',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/me/edit',
      name: 'ProfileEdit',
      component: Profile,
      props: {edit: true}
    },
    {
      path: '/thread/create/:forumId',
      name: 'ThreadCreate',
      component: ThreadCreate,
      props: true
    },
    {
      path: '/category/:id',
      name: 'Category',
      component: Category,
      props: true
    },
    {
      path: '/thread/:id',
      name: 'ThreadShow',
      component: ThreadShow,
      props: true
    },
    {
      path: '/forum/:id',
      name: 'Forum',
      component: Forum,
      props: true
    },

    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    }
  ],
  mode: 'history'
})
