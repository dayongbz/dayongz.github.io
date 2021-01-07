import React, { memo } from "react"

import GlobalNav from "./GlobalNav"
import globalWrapper from "../css/components/global-wrapper"
import layoutWrapper from "../css/components/layout-wrapper"
import Bio from "./Bio"

const Layout = memo(({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  const isPost = location.pathname.includes("/post/")

  return (
    <div css={layoutWrapper}>
      <div css={globalWrapper} data-is-root-path={isRootPath}>
        <header>
          <GlobalNav title={title} />
        </header>
        <main>
          {!isPost && <Bio />}
          {children}
        </main>
      </div>
    </div>
  )
})

export default Layout
