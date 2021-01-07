import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/Seo"

const NotFoundPage = ({ data, location }) => {
  const { title: siteTitle, author, social } = data.site.siteMetadata
  const avatar = data.avatar?.childImageSharp.fluid

  return (
    <Layout
      location={location}
      title={siteTitle}
      author={author}
      avatar={avatar}
      social={social}
    >
      <SEO title="404: Not Found" />
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  )
}

export default NotFoundPage

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
        social {
          github
          facebook
          twitter
        }
      }
    }
  }
`
