import React from "react"
// react context
import GlobalContextProvider from "./src/context/GlobalContextProvider"

// custom typefaces
import "typeface-montserrat"
import "typeface-merriweather"
// normalize CSS across browsers
import "./src/style/normalize.css"
// Toggle CSS
import "./src/style/Toggle.css"
// gatsby-remark-vscode CSS
// import "gatsby-remark-vscode/styles.css"
// custom CSS styles
import "./src/style/style.css"

// custom web fonts
import "fontsource-nanum-gothic"

// react context
export const wrapRootElement = ({ element }) => {
  return <GlobalContextProvider>{element}</GlobalContextProvider>
}
