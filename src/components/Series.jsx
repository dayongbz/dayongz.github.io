import React, { memo, useState } from "react"
import { Link } from "gatsby"

import ArrowDropDown from "./icon/ArrowDropDown"
import ArrowDropUp from "./icon/ArrowDropUp"
import seriesCss, {
  seriesFooter,
  backgroundText,
} from "../css/components/series"

const Series = memo(({ series, seriesTitle, postTitle }) => {
  const [listVisible, setListVisible] = useState(false)
  const seriesCurrentIndex = series.findIndex(
    item => item.node?.frontmatter?.title === postTitle
  )

  const onClick = () => {
    setListVisible(!listVisible)
  }
  return (
    <div css={seriesCss}>
      <div css={backgroundText}>SERIES</div>
      <h2>{seriesTitle}</h2>
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
      <div css={seriesFooter}>
        {listVisible ? (
          <button onClick={onClick}>
            <ArrowDropUp /> Hide List
          </button>
        ) : (
          <button onClick={onClick}>
            <ArrowDropDown /> Show List
          </button>
        )}
        <p>
          {seriesCurrentIndex + 1}/{series.length}
        </p>
      </div>
    </div>
  )
})

export default Series
