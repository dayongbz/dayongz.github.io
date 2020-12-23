import React, { memo } from "react"

const TableOfContents = memo(({ items }) => {
  return (
    <>
      <div className="toc-wrapper">
        <div className="toc">
          <p className="title">Table of Contents</p>
          <div dangerouslySetInnerHTML={{ __html: items }} />
        </div>
      </div>
    </>
  )
})

export default TableOfContents
