import React, { memo, useMemo, useEffect, useState } from "react"

const TableOfContents = memo(({ items }) => {
  const [currentHeaderUrl, setCurrentHeaderUrl] = useState()

  useEffect(() => {
    const scroll = () => {
      // toc
      const isToc =
        document.getElementsByClassName("toc-wrapper")[0].offsetWidth > 0
      if (isToc) {
        let tempCurrentUrl
        const currentOffsetY = window.pageYOffset
        const headerElements = document.getElementsByClassName("anchor-header")
        for (const elem of headerElements) {
          const elemTop = elem.getBoundingClientRect().top + currentOffsetY
          if (currentOffsetY >= elemTop - 10) {
            tempCurrentUrl = elem.href.split(window.location.origin)[1]
          }
        }
        setCurrentHeaderUrl(tempCurrentUrl)
      }
    }
    window.addEventListener("scroll", scroll)
    return () => {
      window.removeEventListener("scroll", scroll)
    }
  }, [])

  const replaceItems = useMemo(() => {
    if (currentHeaderUrl) {
      return items.replace(
        `"${currentHeaderUrl}"`,
        `"${currentHeaderUrl}" class="active"`
      )
    } else {
      return items
    }
  }, [currentHeaderUrl, items])

  return (
    <>
      <div className="toc-wrapper">
        <div className="toc">
          <p className="title">Table of Contents</p>
          <div dangerouslySetInnerHTML={{ __html: replaceItems }} />
        </div>
      </div>
    </>
  )
})

export default TableOfContents
