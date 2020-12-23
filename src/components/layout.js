import React from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <div style={{ marginTop: "65px" }}></div>
      <nav className="global-nav">
        <Link className="header-link-home" to="/">
          <div>{title}</div>
        </Link>
      </nav>
      <main>{children}</main>
      <footer>
        {title} ❤{` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
