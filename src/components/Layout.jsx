import React from "react"
import ThemeSwitch from "./ThemeSwitch"
import GlobalNav from "./GlobalNav"

import { css } from "@emotion/react"

const globalWrapper = css`
  margin: var(--spacing-0) auto;
  max-width: var(--maxWidth-wrapper);
  padding: var(--spacing-16) var(--spacing-5);

  .bio {
    margin-bottom: var(--spacing-20);
  }

  > header {
    display: flex;
    padding: var(--spacing-5) 0;
    justify-content: flex-end;
  }
`

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <div
      style={{
        color: "var(--color-text)",
        backgroundColor: "var(--color-background)",
        transition:
          "color 0.3s ease, background-color 0.3s ease, border 0.3s ease",
      }}
    >
      <GlobalNav title={title} />
      <div
        css={globalWrapper}
        className="global-wrapper"
        data-is-root-path={isRootPath}
      >
        <header>
          <ThemeSwitch />
        </header>
        <main>{children}</main>
      </div>
    </div>
  )
}

export default Layout
