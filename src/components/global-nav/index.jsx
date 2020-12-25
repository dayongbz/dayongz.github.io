import React, { useEffect, useRef, memo } from "react"
import { Link } from "gatsby"

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
    <nav ref={navRef} className="global-nav">
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    </nav>
  )
})

export default GlobalNav
