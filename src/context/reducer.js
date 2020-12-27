const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_POST": {
      return {
        ...state,
        posts: state.posts + 3,
      }
    }
    case "SET_POST": {
      return {
        ...state,
        posts: action.posts,
      }
    }
    case "SET_MAX_POST": {
      return {
        ...state,
        maxPosts: action.maxPosts,
      }
    }
    default:
      return state
  }
}
export default reducer
