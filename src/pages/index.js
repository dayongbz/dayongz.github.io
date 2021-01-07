import React, { memo, useEffect, useContext, useState } from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import PostList from "../components/PostList"
import PostTab from "../components/PostTab"

import { GlobalStateContext } from "../context/GlobalContextProvider"

const BlogIndex = memo(({ data, location }) => {
  const state = useContext(GlobalStateContext)
  const { title: siteTitle } = data.site.siteMetadata
  const { nodes: postsAll } = data.allMdx
  const seriesGroup = data.series.group
  const [posts, setPosts] = useState(postsAll)

  useEffect(() => {
    // filtering posts each tab
    if (state.postTab !== "all") {
      setPosts(
        seriesGroup.filter(item => item.series === state.postTab)[0].nodes ||
          postsAll
      )
    } else {
      setPosts(postsAll)
    }
  }, [state.postTab, postsAll, seriesGroup, setPosts])

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" location={location} />
      <PostTab seriesGroup={seriesGroup} />
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
