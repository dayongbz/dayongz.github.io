import React, { useContext, useEffect } from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import PostList from "../components/PostList"

import {
  GlobalStateContext,
  GlobalDispatchContext,
} from "../context/GlobalContextProvider"
import { indexPageTab } from "../css/components/index-page"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const author = data.site.siteMetadata?.author
  const avatar = data.avatar?.childImageSharp.fluid
  const posts = data.allMdx.nodes
  const state = useContext(GlobalStateContext)
  const dispatch = useContext(GlobalDispatchContext)

  useEffect(() => {
    // set max post count
    dispatch({ type: "SET_MAX_POST", maxPosts: posts.length })
  }, [posts, dispatch])
  return (
    <Layout
      location={location}
      title={siteTitle}
      author={author}
      avatar={avatar}
    >
      <SEO title="All posts" />
      <ul css={indexPageTab}>
        <li className="active">
          <span>Latest</span>
        </li>
        <li>
          <span>Series</span>
        </li>
      </ul>
      {posts.length ? (
        <PostList
          posts={posts}
          postsCount={state.posts}
          maxPostsCount={state.maxPosts}
          dispatch={dispatch}
        />
      ) : (
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      )}
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
