import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import PostList from "../components/PostList"

const Tags = ({ pageContext, data, location }) => {
  const { title: siteTitle, author, social } = data.site.siteMetadata
  const { tag } = pageContext
  const { nodes, totalCount } = data.allMdx
  const avatar = data.avatar?.childImageSharp.fluid
  const tagHeader = `${totalCount} post${
    totalCount > 1 ? "s" : ""
  } for "${tag}"`

  return (
    <Layout
      location={location}
      title={siteTitle}
      author={author}
      avatar={avatar}
      social={social}
    >
      <SEO title={`#${tag}`} />
      <h2>{tagHeader}</h2>
      <PostList posts={nodes} />
    </Layout>
  )
}

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fluid(maxWidth: 300, maxHeight: 300, cropFocus: CENTER) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    site {
      siteMetadata {
        title
        author {
          name
          summary
        }
        social {
          github
          facebook
          twitter
        }
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
              fluid(maxWidth: 700, maxHeight: 300, cropFocus: CENTER) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
