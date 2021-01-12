import React, { memo, useRef, useCallback } from "react"
import { indexPageTab } from "../css/components/index-page"

const PostTab = memo(({ categoriesGroup, setPosts, postsAll }) => {
  const tabRef = useRef()

  const onClickTab = useCallback(
    e => {
      const target = e.currentTarget
      if (!target.classList.contains("active")) {
        // if you need many tabs
        const { offsetWidth: tabWidth } = target
        const { scrollLeft, offsetWidth: wrapperWidth } = tabRef.current
        const tabLeft = target.getBoundingClientRect().left
        const wrapperLeft = tabRef.current.getBoundingClientRect().left
        const refineLeft = tabLeft - wrapperLeft
        const targetScrollX =
          scrollLeft + refineLeft - wrapperWidth / 2 + tabWidth / 2

        // smooth scroll
        tabRef.current.scrollTo({
          top: 0,
          left: targetScrollX,
          behavior: "smooth",
        })

        // delete active className
        Array.from(tabRef.current?.children).forEach(item => {
          item.classList.remove("active")
        })

        // add active className
        target.classList.add("active")
        if (target.dataset.title !== "all") {
          setPosts(
            categoriesGroup.filter(
              item => item.categories === target.dataset.title
            )[0].nodes || postsAll
          )
        } else {
          setPosts(postsAll)
        }
      }
    },
    [postsAll, setPosts, categoriesGroup]
  )

  return (
    <div css={indexPageTab} ref={tabRef}>
      <button className="active" onClick={onClickTab} data-title="all">
        All Posts
      </button>
      {categoriesGroup &&
        categoriesGroup.map((item, index) => (
          <button
            key={item.categories + index}
            onClick={onClickTab}
            data-title={item.categories}
          >
            {item.categories}
          </button>
        ))}
    </div>
  )
})

export default PostTab
