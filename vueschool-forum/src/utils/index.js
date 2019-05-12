const CountObjectPropLength = (obj) => {
  if (typeof obj === 'object') {
    return Object.keys(obj).length
  } else {
    return 0
  }
}

const appendChildToParent = ({parent, child}) => {
  return function (state, {childId, parentId}) {
    const resource = state[parent][parentId]

    if (!resource.posts) {
      Vue.set(resource, child, {})
    }
    Vue.set(state[parent][parentId][child], childId, childId)
  }
}

export {
  CountObjectPropLength,
  appendChildToParent
}
