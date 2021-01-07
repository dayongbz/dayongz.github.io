import React, { memo } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import { FaFacebook, FaTwitter, FaGithub } from "react-icons/fa"

import bio, {
  bioAvatar,
  bioDirection,
  bioIconWrapper,
} from "../css/components/bio"

const Bio = memo(() => {
  const data = useStaticQuery(
    graphql`
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
  )

  const avatar = data.avatar?.childImageSharp.fluid
  const {
    social: { github, facebook, twitter },
    author,
  } = data.site.siteMetadata
  return (
    <div css={bio}>
      {avatar && (
        <Image
          css={bioAvatar}
          objectFit="cover"
          objectPosition="center"
          fluid={avatar}
        />
      )}
      <div css={bioDirection}>
        <h2>{author?.name}</h2>
        <p>{author?.summary}</p>
        <div css={bioIconWrapper}>
          <a
            href={`https://github.com/${github}`}
            target="_blank"
            rel="noreferrer"
            aria-label="Github"
          >
            <FaGithub />
          </a>
          <a
            href={`https://www.facebook.com/${facebook}`}
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
          >
            <FaFacebook />
          </a>
          <a
            href={`https://twitter.com/${twitter}`}
            target="_blank"
            rel="noreferrer"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
        </div>
      </div>
    </div>
  )
})

export default Bio
