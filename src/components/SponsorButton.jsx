import React, { memo } from "react"
import sponsorButton from "../css/components/sponsor-button"

const SponsorButton = memo(({ href, text }) => {
  return (
    <a
      css={sponsorButton}
      role="button"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {text}
    </a>
  )
})

export default SponsorButton
