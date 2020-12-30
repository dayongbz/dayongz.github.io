import React, { memo, useState } from "react"
import { Link } from "gatsby"

import ArrowDropDown from "./icon/ArrowDropDown"
import ArrowDropUp from "./icon/ArrowDropUp"
import bookmark, { bookmarkFooter } from "../css/components/bookmark"

const Bookmark = memo(({ series, seriesTitle, postTitle }) => {
  const [listVisible, setListVisible] = useState(false)
  const seriesCurrentIndex = series.findIndex(
    item => item.node?.frontmatter?.title === postTitle
  )

  const onClick = () => {
    setListVisible(!listVisible)
  }
  return (
    <div css={bookmark}>
      <h2>
        <strong>SERIES</strong> - {seriesTitle}
      </h2>
      {listVisible && (
        <ul>
          {series.map((item, index) => {
            const title = item.node?.frontmatter?.title
            const slug = item.node?.fields?.slug
            return (
              <li key={title + index}>
                <Link
                  className={postTitle === title ? "active" : null}
                  to={slug}
                >
                  {title}
                </Link>
              </li>
            )
          })}
        </ul>
      )}
      <div css={bookmarkFooter}>
        {listVisible ? (
          <button onClick={onClick}>
            <ArrowDropUp /> 숨기기
          </button>
        ) : (
          <button onClick={onClick}>
            <ArrowDropDown /> 목록 보기
          </button>
        )}
        <p>
          {seriesCurrentIndex + 1}/{series.length}
        </p>
      </div>
    </div>
  )
})

export default Bookmark
