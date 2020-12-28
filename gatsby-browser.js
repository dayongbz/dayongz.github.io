import React from "react"

// react context
import GlobalContextProvider from "./src/context/GlobalContextProvider"

// normalize CSS across browsers
import "./src/style/normalize.css"

// Toggle CSS
import "./src/style/Toggle.css"

// custom CSS styles
import "./src/style/style.css"

// custom web fonts
import "fontsource-nanum-gothic"

// react context
export const wrapRootElement = ({ element }) => {
  return <GlobalContextProvider>{element}</GlobalContextProvider>
}
