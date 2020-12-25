import React from "react"
import ThemeSwitch from "../theme-switch"
import GlobalNav from "../global-nav"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <>
      <GlobalNav title={title} />
      <div className="global-wrapper" data-is-root-path={isRootPath}>
        <header>
          <ThemeSwitch />
        </header>
        <main>{children}</main>
      </div>
    </>
  )
}

export default Layout
