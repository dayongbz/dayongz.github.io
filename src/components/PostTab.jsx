import React, { memo, useRef, useEffect, useContext } from "react"
import { indexPageTab } from "../css/components/index-page"

import { GlobalDispatchContext } from "../context/GlobalContextProvider"

const PostTab = memo(({ categories }) => {
  const tabRef = useRef()
  const dispatch = useContext(GlobalDispatchContext)

  useEffect(() => {
    const onClickTab = index => {
      return e => {
        const target = e.currentTarget
        if (!target.classList.contains("active")) {
          const { offsetWidth: tabWidth } = target
          const { scrollLeft, offsetWidth: wrapperWidth } = tabRef.current
          const tabLeft = target.getBoundingClientRect().left
          const wrapperLeft = tabRef.current.getBoundingClientRect().left
          const refineLeft = tabLeft - wrapperLeft
          const targetScrollX =
            scrollLeft + refineLeft - wrapperWidth / 2 + tabWidth / 2
          tabRef.current.scrollTo({
            top: 0,
            left: targetScrollX,
            behavior: "smooth",
          })

          Array.from(tabRef.current?.children).forEach(item => {
            item.classList.remove("active")
          })

          target.classList.add("active")
          dispatch({ type: "SET_POST_TAB", postTab: index })
        }
      }
    }

    const children = Array.from(tabRef.current?.children)
    children.forEach((item, index) => {
      item.addEventListener("click", onClickTab(index))
    })

    return () => {
      children.forEach((item, index) => {
        item.removeEventListener("click", onClickTab(index))
      })
    }
  }, [dispatch])

  return (
    <ul css={indexPageTab} ref={tabRef}>
      <li className="active">
        <span>Latest</span>
      </li>
      {categories.map((item, index) => (
        <li key={item + index}>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
})

export default PostTab
