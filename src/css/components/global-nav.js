import { css } from "@emotion/react"

import flexCenter from "./common/flex-center"
import { mqMax } from "../global/media-query"
import themeTransition from "./common/theme-transiton"

export const globalNavLinkHome = css`
  font-weight: var(--fontWeight-black);
  font-family: var(--font-heading);
  font-size: var(--fontSize-2);
  :hover {
    text-decoration: none;
  }
`

export const globalNavInnerWrapper = css`
  ${flexCenter};
  justify-content: space-between;
  max-width: var(--maxWidth-4xl);
  width: 100%;
  height: 100%;
`

const globalNav = css`
  ${flexCenter};
  ${themeTransition}
  position: fixed;
  top: var(--spacing-0);
  left: var(--spacing-0);
  right: var(--spacing-0);
  height: var(--spacing-16);
  background-color: var(--color-background-op);
  padding: var(--spacing-0) var(--spacing-16);
  z-index: 99999;
  transition: transform 0.3s ease, color 0.3s ease, background-color 0.3s ease,
    border 0.3s ease;
  backdrop-filter: blur(5px);

  &.disable {
    transform: translateY(-100%);
  }

  a {
    color: var(--color-text);
  }

  ${mqMax[1]} {
    padding: var(--spacing-0) var(--spacing-3);
  }
`

export default globalNav
