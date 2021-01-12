import React, { memo, useState } from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import PostList from "../components/PostList"
import PostTab from "../components/PostTab"

const BlogIndex = memo(({ data, location }) => {
  const { title: siteTitle } = data.site.siteMetadata
  const { nodes: postsAll } = data.allMdx
  const categoriesGroup = data.categories.group
  const [posts, setPosts] = useState(postsAll)

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" location={location} />
      <PostTab
        categoriesGroup={categoriesGroup}
        setPosts={setPosts}
        postsAll={postsAll}
      />
      <PostList posts={posts} />
    </Layout>
  )
})

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
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
              fluid(maxWidth: 711, maxHeight: 300, cropFocus: CENTER) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
    categories: allMdx(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      group(field: frontmatter___categories) {
        categories: fieldValue
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
  }
`
