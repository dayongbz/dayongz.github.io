import React, { useContext, useEffect } from "react"
import { Link, graphql } from "gatsby"
import Image from "gatsby-image"

import Layout from "../components/Layout"
import SEO from "../components/Seo"

import {
  GlobalStateContext,
  GlobalDispatchContext,
} from "../context/GlobalContextProvider"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes
  const state = useContext(GlobalStateContext)
  const dispatch = useContext(GlobalDispatchContext)

  useEffect(() => {
    dispatch({ type: "SET_POST", posts: 3 })
    dispatch({ type: "SET_MAX_POST", maxPosts: posts.length })
  }, [posts, dispatch])

  useEffect(() => {
    const nextPage = () => {
      const currentOffsetY = window.pageYOffset
      const currentInnerHeight = window.innerHeight
      const windowBottom = currentOffsetY + currentInnerHeight
      const bodyHeight = parseInt(document.body.getBoundingClientRect().height)
      if (windowBottom === bodyHeight && state.maxPosts > state.posts) {
        dispatch({ type: "ADD_POST" })
      }
    }

    window.addEventListener("scroll", nextPage)
    return () => {
      window.removeEventListener("scroll", nextPage)
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
        {state.posts &&
          posts.slice(0, state.posts).map(post => {
            const title = post.frontmatter.title || post.fields.slug
            const featuredImgFluid = post.frontmatter.featuredImage

            return (
              <li className="post-list-item" key={post.fields.slug}>
                <article itemScope itemType="http://schema.org/Article">
                  {featuredImgFluid && (
                    <Image
                      objectFit="cover"
                      objectPosition="50% 50%"
                      fluid={featuredImgFluid.childImageSharp.fluid}
                    ></Image>
                  )}
                  <header>
                    <Link to={post.fields.slug} itemProp="url">
                      <h2>
                        <span itemProp="headline">{title}</span>
                      </h2>
                    </Link>
                    <small>{post.frontmatter.date}</small>
                  </header>
                  <section>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: post.frontmatter.description || post.excerpt,
                      }}
                      itemProp="description"
                    />
                  </section>
                </article>
              </li>
            )
          })}
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
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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
