import React, { useReducer } from "react"
import initialState from "./initialState"
import reducer from "./reducer"

export const GlobalStateContext = React.createContext()
export const GlobalDispatchContext = React.createContext()

const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <GlobalStateContext.Provider value={state}>
      <GlobalDispatchContext.Provider value={dispatch}>
        {children}
      </GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
  )
}

export default GlobalContextProvider
