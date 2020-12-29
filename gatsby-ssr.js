import React from "react"
import { Global, css } from "@emotion/react"

// css variable
import globalStyle from "./src/css/global-style"

import GlobalContextProvider from "./src/context/GlobalContextProvider"

export const wrapRootElement = ({ element }) => {
  return (
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
