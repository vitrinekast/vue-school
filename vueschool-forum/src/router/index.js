import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/Views/ViewHome'
import ThreadShow from '@/Views/ViewThreadShow'
import NotFound from '@/Views/ViewNotFound'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/thread/:id',
      name: 'ThreadShow',
      component: ThreadShow,
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
