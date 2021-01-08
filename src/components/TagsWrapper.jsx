import React, { memo } from "react"
import { css } from "@emotion/react"
import { Link } from "gatsby"
import kebabCase from "lodash/kebabCase"
import label from "../css/components/common/label"

const TagsWrapper = memo(({ post }) => {
  return (
    <div
      css={css`
        display: flex;
        flex-wrap: wrap;
        margin-bottom: var(--spacing-4);
      `}
    >
      {post.frontmatter.tags.map((item, index) => (
        <Link
          css={css`
            ${label};
            margin-top: var(--spacing-2);
          `}
          to={`/tags/${kebabCase(item)}/`}
          key={item + index}
        >
          #{item}
        </Link>
      ))}
    </div>
  )
})

export default TagsWrapper
