import React, { memo } from "react"

const SponsorButton = memo(({ href, text }) => {
  return (
    <div className="sponsor-button">
      <a href={href} target="_blank" rel="noopener noreferrer">
        <span>{text}</span>
      </a>
    </div>
  )
})

export default SponsorButton
