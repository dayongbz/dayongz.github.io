import React from "react"
import useDarkMode from "use-dark-mode"

export const GlobalDarkModeContext = React.createContext()

const GlobalDarkModeContextProvider = ({ children }) => {
  const darkMode = useDarkMode(false, {
    classNameDark: "dark",
    classNameLight: "light",
  })

  return (
    <GlobalDarkModeContext.Provider value={darkMode}>
      {children}
    </GlobalDarkModeContext.Provider>
  )
}

export default GlobalDarkModeContextProvider
