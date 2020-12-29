import React from "react"
import { Global, css } from "@emotion/react"

// css variable
import globalStyle from "./src/css/global-style"

// react context
import GlobalContextProvider from "./src/context/GlobalContextProvider"

// normalize CSS across browsers
import "./src/css/normalize.css"

// custom CSS styles
import "./src/css/style.css"

// custom web fonts
import "fontsource-nanum-gothic"

export const wrapRootElement = ({ element }) => {
  return (
    // react context
    <GlobalContextProvider>
      <Global
        styles={css`
          ${globalStyle};
        `}
      />
      {element}
    </GlobalContextProvider>
  )
}
