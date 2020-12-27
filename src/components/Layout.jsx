import React from "react"
import ThemeSwitch from "./ThemeSwitch"
import GlobalNav from "./GlobalNav"

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
      <div className="global-wrapper" data-is-root-path={isRootPath}>
        <header>
          <ThemeSwitch />
        </header>
        <main>{children}</main>
      </div>
    </div>
  )
}

export default Layout
