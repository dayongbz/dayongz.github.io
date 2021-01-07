import React, { memo } from "react"
import Image from "gatsby-image"
import { FaFacebook, FaTwitter, FaGithub } from "react-icons/fa"

import bio, {
  bioAvatar,
  bioDirection,
  bioIconWrapper,
} from "../css/components/bio"

const Bio = memo(({ author, avatar, social }) => {
  const { github, facebook, twitter } = social
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
