import React, { useEffect, useRef, useState } from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  const navRef = useRef()
  let prevOffsetY

  useEffect(() => {
    const scroll = () => {
      const currentOffsetY = window.pageYOffset
      if (navRef.current) {
        if (prevOffsetY > currentOffsetY) {
          navRef.current.classList.remove("disable")
        } else {
          navRef.current.classList.add("disable")
        }
        prevOffsetY = currentOffsetY
      }
    }
    window.addEventListener("scroll", scroll)
    return () => {
      window.removeEventListener("scroll", scroll)
    }
  }, [navRef])

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <div style={{ marginTop: "65px" }}></div>
      <nav ref={navRef} className="global-nav">
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
