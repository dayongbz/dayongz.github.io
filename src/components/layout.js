import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

const Layout = ({ location, title, children }) => {
  const data = useStaticQuery(graphql`
    query LayoutQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50, quality: 95) {
            ...GatsbyImageSharpFixed
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
    }
  `)

  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  const author = data.site.siteMetadata?.title
  const avatar = data?.avatar?.childImageSharp?.fixed
  // let header

  // if (isRootPath) {
  //   header = (
  //     <h1 className="main-heading">
  //       <Link to="/">{title}</Link>
  //     </h1>
  //   )
  // } else {
  //   header = (
  //     <Link className="header-link-home" to="/">
  //       {title}
  //     </Link>
  //   )
  // }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <div style={{ marginTop: "65px" }}></div>
      <nav className="global-nav">
        <Link className="header-link-home" to="/">
          <div>
            {avatar && (
              <Image
                fixed={avatar}
                alt={author?.name || ``}
                className="bio-avatar"
                imgStyle={{
                  borderRadius: `50%`,
                }}
              />
            )}
            {title}
          </div>
        </Link>
      </nav>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
