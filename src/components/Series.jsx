import React, { memo, useState } from "react"
import { Link } from "gatsby"
import { FaCaretUp, FaCaretDown } from "react-icons/fa"

import seriesCss, { seriesHead } from "../css/components/series"

const Series = memo(({ series, seriesTitle, postTitle }) => {
  const [listVisible, setListVisible] = useState(false)
  const seriesCurrentIndex = series.findIndex(
    item => item.frontmatter?.title === postTitle
  )

  const onClick = () => {
    setListVisible(!listVisible)
  }
  return (
    <div css={seriesCss}>
      <div css={seriesHead}>
        <h2>
          {seriesTitle}
          <span>
            {seriesCurrentIndex + 1}/{series.length}
          </span>
        </h2>
        {listVisible ? (
          <button onClick={onClick}>
            <FaCaretUp />
            <span>Hide List</span>
          </button>
        ) : (
          <button onClick={onClick}>
            <FaCaretDown /> <span>Show List</span>
          </button>
        )}
      </div>
      {listVisible && (
        <ul>
          {series.map((item, index) => {
            const title = item.frontmatter?.title
            const slug = item.fields?.slug
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
    </div>
  )
})

export default Series
