import React, { useContext, useEffect } from "react"
import { graphql } from "gatsby"
import { css } from "@emotion/react"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import PostList from "../components/PostList"

import {
  GlobalStateContext,
  GlobalDispatchContext,
} from "../context/GlobalContextProvider"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const author = data.site.siteMetadata?.author
  const avatar = data.avatar?.childImageSharp.fluid
  const cover = data.cover?.childImageSharp.fluid
  const posts = data.allMdx.nodes
  const state = useContext(GlobalStateContext)
  const dispatch = useContext(GlobalDispatchContext)

  useEffect(() => {
    // set max post count
    dispatch({ type: "SET_MAX_POST", maxPosts: posts.length })
  }, [posts, dispatch])

  if (posts.length === 0) {
    return (
      <Layout
        location={location}
        title={siteTitle}
        author={author}
        avatar={avatar}
        cover={cover}
      >
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
    <Layout
      location={location}
      title={siteTitle}
      author={author}
      avatar={avatar}
      cover={cover}
    >
      <SEO title="All posts" />
      <p
        css={css`
          margin: var(--spacing-0) var(--spacing-0) var(--spacing-3);
          padding: var(--spacing-4) var(--spacing-0);
          font-size: var(--fontSize-3);
          font-weight: bold;
        `}
      >
        All posts
      </p>
      <PostList
        posts={posts}
        postsCount={state.posts}
        maxPostsCount={state.maxPosts}
        dispatch={dispatch}
      />
    </Layout>
  )
}

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
    cover: file(absolutePath: { regex: "/profile-cover.jpg/" }) {
      childImageSharp {
        fluid(maxWidth: 1512, maxHeight: 432, cropFocus: CENTER) {
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
