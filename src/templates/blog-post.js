import React, { useEffect, useRef, useState } from "react"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Image from "gatsby-image"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Utterances from "../components/Utterances"
import TableOfContents from "../components/TableOfContents"
import SponsorButton from "../components/SponsorButton"
import Series from "../components/Series"
import { sponsorButtonWrapper } from "../css/components/sponsor-button"
import blogPost, { infoWrapper } from "../css/components/blog-post"
import markdownBody from "../css/components/markdownBody"

const BlogPostTemplate = ({ data, location }) => {
  const post = data.mdx
  const author = data.site.siteMetadata?.author
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = data
  const tocItems = post.tableOfContents?.items
  const isTOCVisible = !!tocItems?.length
  const series = data.series.edges
  const seriesTitle = post.frontmatter?.series
  const isSeries = !!data.series.edges.length
  const observeElemRef = useRef()
  const [isUtterence, setIsUtterence] = useState(false)

  useEffect(() => {
    const target = observeElemRef.current
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !isUtterence) {
            setIsUtterence(true)
          }
        })
      },
      { threshold: 1.0 }
    )

    if (target) observer.observe(target)
    return () => {
      if (target) observer.observe(target)
    }
  }, [isUtterence])

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
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
              {author.name} - {post.frontmatter.date}
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
          href="https://www.buymeacoffee.com/dayongbz"
          text="🍗 Buy me a chicken"
        />
      </div>
      <hr />
      {isUtterence ? <Utterances repo="dayongbz/utterances_comment" /> : null}
      <nav ref={observeElemRef} className="blog-post-nav">
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
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
        author {
          name
        }
        title
      }
    }
    mdx(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      body
      tableOfContents
      frontmatter {
        title
        date(formatString: "YYYY.MM.DD")
        description
        series
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
      edges {
        node {
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
