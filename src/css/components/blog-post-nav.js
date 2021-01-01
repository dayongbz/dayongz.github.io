import { css } from "@emotion/react"
import button from "./common/button"
import { mqMax } from "../global/media-query"

export const blogPostNavButton = css`
  ${button};
  max-width: var(--maxWidth-full);
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: var(--spacing-2);

  ${mqMax[1]} {
    width: var(--maxWidth-full);
  }
  & :last-child {
    margin-left: var(--spacing-2);
  }
`

const blogPostNav = css`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: var(--maxWidth-full);
`

export default blogPostNav
