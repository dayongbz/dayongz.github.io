import React, { memo, useMemo } from "react"

const TableOfContents = memo(({ items, currentHeaderUrl }) => {
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
