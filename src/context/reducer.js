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
    default:
      return state
  }
}
export default reducer
