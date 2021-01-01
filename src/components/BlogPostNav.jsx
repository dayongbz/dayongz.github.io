import React, { memo } from "react"
import { Link } from "gatsby"
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa"

import blogPostNav, { blogPostNavButton } from "../css/components/blog-post-nav"

export const BlogPostNavItem = memo(({ type, post }) => {
  return (
    <>
      {post && (
        <Link
          css={blogPostNavButton}
          to={post.fields.slug}
          rel={type}
          role="button"
        >
          {type === "Prev" ? (
            <>
              <FaLongArrowAltLeft />
              <span>{post.frontmatter.title}</span>
            </>
          ) : (
            <>
              <span>{post.frontmatter.title}</span>
              <FaLongArrowAltRight />
            </>
          )}
        </Link>
      )}
    </>
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
