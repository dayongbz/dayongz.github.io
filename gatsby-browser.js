// custom typefaces
import "typeface-montserrat"
import "typeface-merriweather"
// normalize CSS across browsers
import "./src/style/normalize.css"
// custom CSS styles
import "./src/style/style.css"

// Highlighting for code blocks
import "./src/style/prism-ghcolors.css"
import "./src/style/prism-atom-dark.css"

// custom web fonts
import "fontsource-nanum-gothic"

// react global state

import React from "react"

import GlobalContextProvider from "./src/context/GlobalContextProvider"

export const wrapRootElement = ({ element }) => {
  return <GlobalContextProvider>{element}</GlobalContextProvider>
}
