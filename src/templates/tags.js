import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import PostList from "../components/PostList"

const Tags = ({ pageContext, data, location }) => {
  const { title: siteTitle } = data.site.siteMetadata
  const { tag } = pageContext
  const { nodes, totalCount } = data.allMdx
  const tagHeader = `${totalCount} post${
    totalCount > 1 ? "s" : ""
  } for "${tag}"`

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title={`#${tag}`} location={location} />
      <h2>{tagHeader}</h2>
      <PostList posts={nodes} />
    </Layout>
  )
}

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      nodes {
        excerpt
        fields {
          slug
        }
        timeToRead
        frontmatter {
          date(formatString: "YYYY.MM.DD")
          title
          description
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
    }
  }
`
