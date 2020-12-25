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

import "fontsource-nanum-gothic"

import React from "react"

import GlobalContextProvider from "./src/context/GlobalContextProvider"

export const wrapPageElement = ({ element }) => {
  return <GlobalContextProvider>{element}</GlobalContextProvider>
}
