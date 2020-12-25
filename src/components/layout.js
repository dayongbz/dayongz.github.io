import React, { useEffect, useRef } from "react"
import { Link } from "gatsby"
import Switch from "react-switch"
import useTheme from "../hooks/useTheme"
import DarkIcon from "./DarkIcon"
import LightIcon from "./LightIcon"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  const navRef = useRef()
  const [theme, themeToggler] = useTheme()

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
    const bodyElem = document.getElementsByTagName("body")[0]
    bodyElem.classList.remove("light")
    bodyElem.classList.remove("dark")
    bodyElem.classList.add(theme === "light" ? "light" : "dark")
  }, [theme])

  return (
    <>
      <nav ref={navRef} className="global-nav">
        <Link className="header-link-home" to="/">
          <p>{title}</p>
        </Link>
      </nav>
      <div className="global-wrapper" data-is-root-path={isRootPath}>
        <header>
          <Switch
            checked={theme === "dark"}
            onChange={themeToggler}
            onColor="#666666"
            offColor="#d1dce5"
            checkedIcon={<DarkIcon />}
            uncheckedIcon={<LightIcon />}
            onHandleColor="#1b1b1b"
            offHandleColor="#ffffff"
          />
        </header>
        <main>{children}</main>
        {/* <footer>
        {title} ❤{` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer> */}
      </div>
    </>
  )
}

export default Layout
