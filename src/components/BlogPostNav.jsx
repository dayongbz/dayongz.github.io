import React, { memo } from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"

import blogPostNav, {
  blogPostNavItem,
  BlogPostNavItemBg,
  blogPostNavItemTitle,
} from "../css/components/blog-post-nav"
import label, { labelLayout } from "../css/components/common/label"

export const BlogPostNavItem = memo(({ type, post }) => {
  const featuredImg = post?.frontmatter.featuredImage
  return (
    <>
      {post && (
        <Link to={post.fields.slug} rel={type}>
          <div css={blogPostNavItem}>
            <div css={labelLayout}>
              <span css={label}>{type}</span>
            </div>
            {featuredImg ? (
              <Image
                objectFit="cover"
                objectPosition="center"
                fluid={featuredImg.childImageSharp.fluid}
              />
            ) : (
              <BlogPostNavItemBg />
            )}
            <p css={blogPostNavItemTitle}>{post.frontmatter.title}</p>
          </div>
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
