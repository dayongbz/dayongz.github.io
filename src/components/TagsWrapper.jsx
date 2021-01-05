import React, { memo } from "react"
import { css } from "@emotion/react"
import label from "../css/components/common/label"

const TagsWrapper = memo(({ post }) => {
  return (
    <div
      css={css`
        display: flex;
        flex-wrap: wrap;
      `}
    >
      {post.frontmatter.tags.map((item, index) => (
        <span
          css={css`
            ${label};
            margin-top: var(--spacing-2);
          `}
          key={item + index}
        >
          #{item}
        </span>
      ))}
    </div>
  )
})

export default TagsWrapper
