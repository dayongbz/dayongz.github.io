import React from "react"
import { css } from "@emotion/react"

import GlobalNav from "./GlobalNav"
import globalWrapper from "../css/components/global-wrapper"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <div
      css={css`
        color: var(--color-text);
        background-color: var(--color-background);
        transition: color 0.3s ease, background-color 0.3s ease,
          border 0.3s ease;
      `}
    >
      <div css={globalWrapper} data-is-root-path={isRootPath}>
        <header>
          <GlobalNav title={title} />
        </header>
        <main>{children}</main>
      </div>
    </div>
  )
}

export default Layout
