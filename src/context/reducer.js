const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_VISIBLE_POST_COUNT": {
      return {
        ...state,
        visiblePostCount: state.visiblePostCount + 3,
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
