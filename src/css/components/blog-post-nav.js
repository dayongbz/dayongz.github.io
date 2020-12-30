import { css } from "@emotion/react"
import flexCenter from "./common/flex-center"

export const blogPostNavItemInner = css`
  ${flexCenter}
  flex-direction:column;
  position: absolute;
  top: var(--spacing-0);
  bottom: var(--spacing-0);
  left: var(--spacing-0);
  right: var(--spacing-0);
  padding: var(--spacing-4);
`

export const blogPostNavItem = css`
  margin: var(--spacing-0);
  position: relative;
  overflow: hidden;
  p {
    color: var(--color-white);
    font-size: var(--fontSize-2);
    font-weight: var(--fontWeight-bold);
    text-shadow: 0 0px 5px var(--color-black);
    margin: var(--spacing-0);
    text-align: center;
  }
  :hover .gatsby-image-wrapper {
    filter: brightness(0.7);
  }
`

const blogPostNav = css`
  display: flex;
  flex-direction: column;
  width: var(--maxWidth-full);

  .gatsby-image-wrapper {
    height: var(--maxWidth-3xs);
    transition: filter 0.3s;
    filter: brightness(0.4);
  }
`

export default blogPostNav
