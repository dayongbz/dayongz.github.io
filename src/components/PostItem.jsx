import React, { memo } from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"

import TagsWrapper from "./TagsWrapper"
import postItem from "../css/components/post-item"

const PostItem = memo(({ post }) => {
  const title = post.frontmatter.title || post.fields.slug
  const featuredImgFluid = post.frontmatter.featuredImage
  return (
    <li css={postItem}>
      <article itemScope itemType="http://schema.org/Article">
        {featuredImgFluid && (
          <Image
            objectFit="cover"
            objectPosition="center"
            fluid={featuredImgFluid.childImageSharp.fluid}
          />
        )}
        <header>
          <h3>
            <Link to={`/post${post.fields.slug}`} itemProp="url">
              <span itemProp="headline">{title}</span>
            </Link>
          </h3>
          <small>
            {post.frontmatter.date}{" "}
            {post.timeToRead && `· ${post.timeToRead} min read`}
          </small>
        </header>
        <section>
          <p
            dangerouslySetInnerHTML={{
              __html: post.frontmatter.description || post.excerpt,
            }}
            itemProp="description"
          />
          {post.frontmatter.tags && <TagsWrapper post={post} />}
        </section>
      </article>
    </li>
  )
})

export default PostItem
