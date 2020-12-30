import React, { memo } from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"
import { css } from "@emotion/react"

import blogPostNav, {
  blogPostNavItem,
  blogPostNavItemInner,
} from "../css/components/blog-post-nav"
import label from "../css/components/common/label"

export const BlogPostNavItem = memo(({ type, post }) => {
  const featuredImg = post?.frontmatter.featuredImage
  return (
    <div css={blogPostNavItem}>
      {post && (
        <Link to={post.fields.slug} rel={type}>
          <div
            css={css`
              position: absolute;
              top: var(--spacing-2);
              left: var(--spacing-0);
              z-index: 9;
              ${label};
            `}
          >
            {type}
          </div>
          {featuredImg && (
            <Image
              objectFit="cover"
              objectPosition="center"
              fluid={featuredImg.childImageSharp.fluid}
            />
          )}
          <div css={blogPostNavItemInner}>
            <p>{post.frontmatter.title}</p>
          </div>
        </Link>
      )}
    </div>
  )
})

const BlogPostNav = memo(({ previous, next }) => {
  return (
    <nav css={blogPostNav}>
      <BlogPostNavItem type="Prev" post={previous} />
      <BlogPostNavItem type="Next" post={next} />
    </nav>
  )
})

export default BlogPostNav
