import firebase from 'firebase'

export default {
  addPost ({commit, state}, post) {
    const postId = firebase.database().ref('posts').push().key
    // post['.key'] = postId
    post.publishedAt = Math.floor(Date.now() / 1000)
    post.userId = state.authId

    const updates = {}
    updates[`posts/${postId}`] = post
    updates[`threads/${post.threadId}/posts/${postId}`] = postId
    updates[`users/${post.userId}/posts/${postId}`] = postId
    firebase.database().ref().update(updates).then(() => {
      commit('setItem', {resource: 'posts', itemId: postId, item: post})
      commit('appendPostToThread', {childId: postId, parentId: post.threadId})
      commit('appendPostToUser', {childId: postId, parentId: post.userId})

      return Promise.resolve(state.posts[postId])
    })
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
    commit('setUser', {userId: user['.key'], user})
  },

  fetchCategory: ({dispatch}, {id}) => dispatch('fetchItem', { resource: 'categories', id }),

  fetchCategories: ({dispatch}, {ids}) => dispatch('fetchItems', {ids, resource: 'categories'}),

  fetchThread: ({dispatch}, {id}) => dispatch('fetchItem', { resource: 'threads', id }),

  fetchThreads: ({dispatch}, {ids}) => dispatch('fetchItems', {ids, resource: 'threads'}),

  fetchForum: ({dispatch}, {id}) => dispatch('fetchItem', { resource: 'forums', id }),

  fetchForums: ({dispatch}, {ids}) => dispatch('fetchItems', {ids, resource: 'forums'}),

  fetchUser: ({dispatch}, {id}) => dispatch('fetchItem', { resource: 'users', id }),

  fetchUsers: ({dispatch}, {ids}) => dispatch('fetchItems', {ids, resource: 'users'}),

  fetchPost: ({dispatch}, {id}) => dispatch('fetchItem', { resource: 'posts', id }),

  fetchPosts: ({dispatch}, {ids}) => dispatch('fetchItems', {ids, resource: 'posts'}),

  fetchItems ({dispatch}, {ids, resource}) {
    ids = Array.isArray(ids) ? ids : Object.keys(ids)
    return Promise.all(ids.map(id => dispatch('fetchItem', {resource, id})))
  },

  fetchAllCategories ({state, commit}) {
    return new Promise((resolve, reject) => {
      firebase.database().ref('categories').once('value', snapshot => {
        const categoriesObject = snapshot.val()
        Object.keys(categoriesObject).forEach(categoryId => {
          const category = categoriesObject[categoryId]
          commit('setItem', {resource: 'categories', itemId: categoryId, item: category})
        })
        resolve(Object.values(state.categories))
      })
    })
  },

  fetchItem ({commit, state}, {resource, id}) {
    return new Promise(function (resolve, reject) {
      firebase.database().ref(resource).child(id).once('value', snapshot => {
        const item = snapshot.val()
        commit('setItem', {resource, itemId: snapshot.key, item})
        resolve(item)
      })
    })
  }
}
