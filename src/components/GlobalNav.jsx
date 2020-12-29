import React, { useEffect, useRef, memo } from "react"
import { Link } from "gatsby"

import globalNav from "../css/components/global-nav"

const GlobalNav = memo(({ title }) => {
  const navRef = useRef()

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
  return (
    <nav css={globalNav} ref={navRef}>
      <Link className="header-link-home" to="/">
        <span>{title}</span>
      </Link>
    </nav>
  )
})

export default GlobalNav
