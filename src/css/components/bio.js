import { css } from "@emotion/react"
import { mqMax } from "../global/media-query"
import flexCenter from "./common/flex-center"

export const bioIconWrapper = css`
  margin-top: var(--spacing-2);
  a {
    color: var(--color-text-light);
    :not(:first-of-type) {
      margin-left: var(--spacing-4);
    }
  }
`

export const bioDirection = css`
  width: calc(var(--maxWidth-full) - var(--spacing-32) - var(--spacing-6));
  order: 1;
  h2 {
    margin: var(--spacing-2) var(--spacing-0);
  }
  p {
    margin: var(--spacing-0);
  }
  ${mqMax[1]} {
    width: var(--maxWidth-full);
    order: 2;
  }
`

export const bioAvatar = css`
  width: var(--spacing-32);
  height: var(--spacing-32);
  border-radius: var(--maxWidth-full);
  overflow: hidden;
  order: 2;
  ${mqMax[1]} {
    order: 1;
  }
`

const bio = css`
  ${flexCenter};
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: var(--spacing-6);
`

export default bio
