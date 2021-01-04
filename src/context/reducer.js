const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_POST_COUNT": {
      return {
        ...state,
        postCount: state.postCount + 3,
      }
    }
    case "SET_MAX_POST_COUNT": {
      return {
        ...state,
        maxPostCount: action.maxPostCount,
      }
    }
    case "SET_POST_TAB": {
      return {
        ...state,
        postTab: action.postTab,
      }
    }
    case "SET_POSTS": {
      return {
        ...state,
        posts: action.posts,
      }
    }
    default:
      return state
  }
}
export default reducer
