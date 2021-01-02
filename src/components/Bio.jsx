import React, { memo } from "react"
import Image from "gatsby-image"

import bio, {
  bioAvatar,
  bioCover,
  bioAvatarWrapper,
  bioCoverGrad,
} from "../css/components/bio"

const Bio = memo(({ author, avatar, cover }) => {
  return (
    <div css={bio}>
      <div css={bioCover}>
        {cover && (
          <Image objectFit="cover" objectPosition="center" fluid={cover} />
        )}
        <div css={bioCoverGrad} />
      </div>
      {avatar && (
        <div css={bioAvatarWrapper}>
          <div css={bioAvatar}>
            <Image objectFit="cover" objectPosition="center" fluid={avatar} />
          </div>
        </div>
      )}
      <h2>{author?.name}</h2>
      <p>{author?.summary}</p>
    </div>
  )
})

export default Bio
