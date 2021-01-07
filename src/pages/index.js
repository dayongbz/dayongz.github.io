import React, { memo } from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import PostList from "../components/PostList"
import PostTab from "../components/PostTab"

const BlogIndex = memo(({ data, location }) => {
  const { title: siteTitle, author } = data.site.siteMetadata
  const { nodes: postsAll } = data.allMdx
  const seriesGroup = data.series.group
  const avatar = data.avatar?.childImageSharp.fluid

  return (
    <Layout
      location={location}
      title={siteTitle}
      author={author}
      avatar={avatar}
    >
      <SEO title="All posts" />
      <PostTab seriesGroup={seriesGroup} />
      <PostList defaultPosts={postsAll} seriesGroup={seriesGroup} />
    </Layout>
  )
})

export default BlogIndex

export const pageQuery = graphql`
  query {
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
      }
    }
    allMdx(limit: 2000, sort: { fields: [frontmatter___date], order: DESC }) {
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
    series: allMdx(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { series: { ne: "null" } } }
    ) {
      group(field: frontmatter___series) {
        series: fieldValue
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
  }
`
