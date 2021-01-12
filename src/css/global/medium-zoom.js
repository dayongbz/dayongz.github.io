import { css } from "@emotion/react"

const mediumZoom = css`
  .medium-zoom--opened > .medium-zoom-overlay,
  .medium-zoom--opened > .medium-zoom-image,
  img.medium-zoom-image--opened {
    z-index: 999;
  }
`
export default mediumZoom
