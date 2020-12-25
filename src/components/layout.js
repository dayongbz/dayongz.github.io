import React, { useEffect, useRef, useState } from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  const navRef = useRef()
  const [theme, setTheme] = useState("light")

  useEffect(() => {
    let prevOffsetY
    const onScroll = () => {
      const currentOffsetY = window.pageYOffset
      if (navRef.current) {
        if (currentOffsetY <= 0) {
          navRef.current.classList.remove("disable")
        } else if (prevOffsetY > currentOffsetY) {
          navRef.current.classList.remove("disable")
        } else {
          navRef.current.classList.add("disable")
        }
        prevOffsetY = currentOffsetY
      }
    }
    window.addEventListener("scroll", onScroll)
    return () => {
      window.removeEventListener("scroll", onScroll)
    }
  }, [navRef])

  useEffect(() => {
    document.getElementsByTagName("body")[0].classList.add(theme)
  }, [theme])

  return (
    <>
      <nav ref={navRef} className="global-nav">
        <Link className="header-link-home" to="/">
          <p>{title}</p>
        </Link>
      </nav>
      <div className="global-wrapper" data-is-root-path={isRootPath}>
        <main>
          <div>hello</div>
          {children}
        </main>
        {/* <footer>
        {title} ❤{` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer> */}
      </div>
    </>
  )
}

export default Layout
