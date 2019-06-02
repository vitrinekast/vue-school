import { CountObjectPropLength } from '@/utils'

export default {
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
}
