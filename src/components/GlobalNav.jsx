import React, { useEffect, useRef, memo } from "react"
import { Link } from "gatsby"

import globalNav, {
  globalNavInnerWrapper,
  globalNavLinkHome,
} from "../css/components/global-nav"
import ThemeSwitch from "./ThemeSwitch"

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
      <div css={globalNavInnerWrapper}>
        <Link css={globalNavLinkHome} to="/">
          <span>{title}</span>
        </Link>
        <ThemeSwitch />
      </div>
    </nav>
  )
})

export default GlobalNav
