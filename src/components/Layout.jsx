import React, { memo } from "react"

import GlobalNav from "./GlobalNav"
import globalWrapper from "../css/components/global-wrapper"
import layoutWrapper from "../css/components/layout-wrapper"

const Layout = memo(({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <div css={layoutWrapper}>
      <div css={globalWrapper} data-is-root-path={isRootPath}>
        <header>
          <GlobalNav title={title} />
        </header>
        <main>{children}</main>
      </div>
    </div>
  )
})

export default Layout
