import { css } from "@emotion/react"

import flexCenter from "./common/flex-center"

const globalNav = css`
  ${flexCenter};
  justify-content: space-between;
  position: fixed;
  top: var(--spacing-0);
  left: var(--spacing-0);
  right: var(--spacing-0);
  background-color: var(--color-background-op);
  height: var(--spacing-16);
  padding: var(--spacing-0) var(--spacing-3);
  border-bottom: 1px solid var(--color-border-primary);
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
  .header-link-home {
    font-weight: var(--fontWeight-black);
    font-family: var(--font-heading);
    font-size: var(--fontSize-2);
    :hover {
      text-decoration: none;
    }
  }
`

export default globalNav
