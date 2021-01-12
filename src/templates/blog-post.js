import React, { useEffect } from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import mediumZoom from "medium-zoom"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Utterances from "../components/Utterances"
import TableOfContents from "../components/TableOfContents"
import SponsorButton from "../components/SponsorButton"
import Series from "../components/Series"
import BlogPostNav from "../components/BlogPostNav"
import TagsWrapper from "../components/TagsWrapper"

import { sponsorButtonWrapper } from "../css/components/sponsor-button"
import blogPost, { infoWrapper } from "../css/components/blog-post"
import markdownBody from "../css/components/markdown-body"

const BlogPostTemplate = ({ data, location }) => {
  const post = data.mdx
  const { title: siteTitle, buyMeACoffee, utterances } = data.site.siteMetadata
  const { previous, next } = data
  const tocItems = post.tableOfContents?.items
  const isTOCVisible = !!tocItems?.length
  const series = data.series.nodes
  const isSeries = !!data.series.nodes.length
  const { featuredImage, series: seriesTitle } = post.frontmatter
  const featuredImgSrc = featuredImage?.childImageSharp.fluid.src
  const zoomOption = { margin: 42, background: "var(--color-background)" }

  useEffect(() => {
    console.log("hello")
    mediumZoom(".markdown-body img", zoomOption)
  }, [zoomOption])

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
        image={featuredImgSrc || null}
        location={location}
      />
      <article
        className="blog-post"
        css={blogPost}
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h1 itemProp="headline">{post.frontmatter.title}</h1>
          <div css={infoWrapper}>
            <p>
              {post.frontmatter.date} · {post.timeToRead} min read
            </p>
          </div>
          {isSeries && (
            <Series
              series={series}
              seriesTitle={seriesTitle}
              postTitle={post.frontmatter.title}
            />
          )}
        </header>
        <div className="markdown-body">
          <article css={markdownBody} itemProp="articleBody">
            <MDXRenderer>{post.body}</MDXRenderer>
          </article>
        </div>
        {isTOCVisible && (
          <TableOfContents items={tocItems} location={location} depth={3} />
        )}
      </article>
      <div css={sponsorButtonWrapper}>
        <SponsorButton
          href={`https://www.buymeacoffee.com/${buyMeACoffee}`}
          text="☕ Buy me a coffee"
        />
      </div>
      {post.frontmatter.tags && <TagsWrapper post={post} />}
      <hr />
      <Utterances repo={utterances} />
      <BlogPostNav previous={previous} next={next} />
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
    $series: String
  ) {
    site {
      siteMetadata {
        title
        utterances
        buyMeACoffee
      }
    }
    mdx(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      body
      tableOfContents
      timeToRead
      frontmatter {
        title
        date(formatString: "YYYY.MM.DD")
        description
        series
        tags
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 711, maxHeight: 300, cropFocus: CENTER) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    previous: mdx(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: mdx(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    series: allMdx(
      sort: { fields: frontmatter___date, order: ASC }
      filter: { frontmatter: { series: { eq: $series, ne: null } } }
    ) {
      nodes {
        frontmatter {
          title
        }
        fields {
          slug
        }
      }
    }
  }
`
