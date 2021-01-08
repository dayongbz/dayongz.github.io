import { css } from "@emotion/react"

import button from "./common/button"
import flexCenter from "./common/flex-center"

export const sponsorButtonWrapper = css`
  ${flexCenter};
  margin: var(--spacing-8) 0;
`

const sponsorButton = css`
  ${button};
  &:parent {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: var(--spacing-8) 0;
  }
`

export default sponsorButton
