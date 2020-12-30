import React, { memo } from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"
import postList from "../css/components/post-list"

const PostItem = memo(({ post }) => {
  const title = post.frontmatter.title || post.fields.slug
  const featuredImgFluid = post.frontmatter.featuredImage
  return (
    <li css={postList}>
      <article itemScope itemType="http://schema.org/Article">
        {featuredImgFluid && (
          <Image
            objectFit="cover"
            objectPosition="center"
            fluid={featuredImgFluid.childImageSharp.fluid}
          />
        )}
        <header>
          <Link to={post.fields.slug} itemProp="url">
            <h2>
              <span itemProp="headline">{title}</span>
            </h2>
          </Link>
          <small>{post.frontmatter.date}</small>
        </header>
        <section>
          <p
            dangerouslySetInnerHTML={{
              __html: post.frontmatter.description || post.excerpt,
            }}
            itemProp="description"
          />
        </section>
      </article>
    </li>
  )
})

export default PostItem
