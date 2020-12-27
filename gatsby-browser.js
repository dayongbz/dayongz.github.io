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

// react global state

import React from "react"

import GlobalContextProvider from "./src/context/GlobalContextProvider"

export const wrapRootElement = ({ element }) => {
  return (
    <GlobalContextProvider>
      <div
        style={{
          color: "var(--color-text)",
          backgroundColor: "var(--color-background)",
          transition:
            "color 0.3s ease, background-color 0.3s ease, border 0.3s ease",
        }}
      >
        {element}
      </div>
    </GlobalContextProvider>
  )
}
