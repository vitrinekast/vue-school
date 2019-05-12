// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import firebase from 'firebase'
import router from './router'
import store from '@/store'

import BaseDate from '@/components/BaseDate'
Vue.component('BaseDate', BaseDate)

Vue.config.productionTip = false

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyD-P_sniMqQwR09gvP86OfWGeppaFK5HQ4',
  authDomain: 'vue-forum-d320c.firebaseapp.com',
  databaseURL: 'https://vue-forum-d320c.firebaseio.com',
  projectId: 'vue-forum-d320c',
  storageBucket: 'vue-forum-d320c.appspot.com',
  messagingSenderId: '976610079271',
  appId: '1:976610079271:web:883f8a7d900756a5'
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
