import React from "react"
import { Global, css } from "@emotion/react"

// noto-sans
import "@fontsource/noto-sans-kr/korean-300.css"
import "@fontsource/noto-sans-kr/korean-700.css"
import "@fontsource/noto-sans-kr/korean-900.css"
import "@fontsource/open-sans/400.css"
import "@fontsource/open-sans/700.css"
import "@fontsource/open-sans/800.css"

// css variable
import globalStyle from "./src/css/global-style"

// react context
import GlobalContextProvider from "./src/context/GlobalContextProvider"

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
