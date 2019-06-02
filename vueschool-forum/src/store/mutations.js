import Vue from 'vue'
import { appendChildToParent } from '@/utils'

export default {
  setPost (state, {postId, post}) {
    Vue.set(state.posts, postId, post)
  },
  setUser (state, {userId, user}) {
    Vue.set(state.users, userId, user)
  },

  setThread (state, {threadId, thread}) {
    Vue.set(state.threads, threadId, thread)
  },

  setItem (state, {itemId, item, resource}) {
    item['.key'] = itemId

    Vue.set(state[resource], itemId, item)
  },

  appendPostToThread: appendChildToParent({parent: 'threads', child: 'posts'}),
  appendPostToUser: appendChildToParent({parent: 'users', child: 'posts'}),
  appendThreadToUser: appendChildToParent({parent: 'users', child: 'threads'}),
  appendThreadToForum: appendChildToParent({parent: 'forums', child: 'threads'})

}
