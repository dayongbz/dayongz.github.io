import React, { useReducer } from "react"
import useDarkMode from "use-dark-mode"

import initialState from "./initialState"
import reducer from "./reducer"

export const GlobalStateContext = React.createContext()
export const GlobalDispatchContext = React.createContext()
export const GlobalDarkModeContext = React.createContext()

const GlobalContextProvider = ({ children }) => {
  const darkMode = useDarkMode(false, {
    classNameDark: "dark",
    classNameLight: "light",
  })

  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <GlobalStateContext.Provider value={state}>
      <GlobalDispatchContext.Provider value={dispatch}>
        <GlobalDarkModeContext.Provider value={darkMode}>
          {children}
        </GlobalDarkModeContext.Provider>
      </GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
  )
}

export default GlobalContextProvider
