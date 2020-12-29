import React from "react"
import { Global, css } from "@emotion/react"

// noto-sans
import "@fontsource/noto-sans-kr/400.css"
import "@fontsource/noto-sans-kr/700.css"
import "@fontsource/noto-sans-kr/900.css"
//nanum-gothic
import "@fontsource/nanum-gothic/400.css"
import "@fontsource/nanum-gothic/700.css"
import "@fontsource/nanum-gothic/800.css"

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
