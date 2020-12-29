import React, { useContext, useEffect } from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import PostList from "../components/PostList"

import {
  GlobalStateContext,
  GlobalDispatchContext,
} from "../context/GlobalContextProvider"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMdx.nodes
  const state = useContext(GlobalStateContext)
  const dispatch = useContext(GlobalDispatchContext)

  useEffect(() => {
    // set max post count
    dispatch({ type: "SET_MAX_POST", maxPosts: posts.length })
  }, [posts, dispatch])

  useEffect(() => {
    // add post count
    const addPosts = () => {
      const currentOffsetY = window.pageYOffset
      const currentInnerHeight = window.innerHeight
      const windowBottom = currentOffsetY + currentInnerHeight
      const bodyHeight = parseInt(document.body.getBoundingClientRect().height)

      if (windowBottom >= bodyHeight && state.maxPosts > state.posts) {
        dispatch({ type: "ADD_POST" })
      }
    }

    window.addEventListener("scroll", addPosts)
    return () => {
      window.removeEventListener("scroll", addPosts)
    }
  }, [dispatch, state.maxPosts, state.posts])

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <SEO title="All posts" />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <ol style={{ listStyle: `none` }}>
        <PostList posts={posts} postsCount={state.posts} />
      </ol>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "YYYY.MM.DD")
          title
          description
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
