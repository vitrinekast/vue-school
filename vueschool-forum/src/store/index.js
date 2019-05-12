import Vue from 'vue'
import Vuex from 'Vuex'
import source from '@/data.json'
import { CountObjectPropLength, appendChildToParent } from '@/utils'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ...source,
    authId: 'ALXhxjwgY9PinwNGHpfai6OWyDu2'
  },

  getters: {
    authUser (state) {
      return state.users[state.authId]
    },
    usersPostsCount (state) {
      return function (id) {
        return CountObjectPropLength(state.users[id].posts)
      }
    },
    userThreadCount (state) {
      return function (id) {
        return CountObjectPropLength(state.users[id].threads)
      }
    }
  },

  actions: {
    addPost ({commit, state}, post) {
      const postId = 'aef' + Math.random()
      post['.key'] = postId
      post.publishedAt = Math.floor(Date.now() / 1000)
      post.userId = state.authId
      commit('setPost', {postId, post})
      commit('appendPostToThread', {childId: postId, parentId: post.threadId})
      commit('appendPostToUser', {childId: postId, parentId: post.userId})
    },
    createThread ({commit, state, dispatch}, {text, title, forumId}) {
      return new Promise((resolve, reject) => {
        const publishedAt = Math.floor(Date.now() / 1000)
        const userId = state.authId
        const threadId = 'aef' + Math.random()

        const thread = {
          '.key': threadId,
          forumId,
          publishedAt,
          title,
          userId
        }

        commit('setThread', {threadId, thread})

        commit('appendThreadToUser', {childId: threadId, parentId: userId})
        commit('appendThreadToForum', {childId: threadId, parentId: forumId})

        dispatch('addPost', {text, threadId})
        resolve(state.threads[threadId])
      })
    },
    setUser ({commit}, user) {
      console.log(user)
      commit('setUser', {userId: user['.key'], user})
    }
  },

  mutations: {
    setPost (state, {postId, post}) {
      Vue.set(state.posts, postId, post)
    },
    setUser (state, {userId, user}) {
      Vue.set(state.users, userId, user)
    },

    setThread (state, {threadId, thread}) {
      Vue.set(state.threads, threadId, thread)
    },
    appendPostToThread: appendChildToParent({parent: 'threads', child: 'posts'}),
    appendPostToUser: appendChildToParent({parent: 'users', child: 'posts'}),
    appendThreadToUser: appendChildToParent({parent: 'users', child: 'threads'}),
    appendThreadToForum: appendChildToParent({parent: 'forums', child: 'threads'})
  }
})
