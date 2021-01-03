import { css } from "@emotion/react"
import button from "./common/button"
import themeTransition from "./common/theme-transiton"

export const indexPageTab = css`
  ${themeTransition};
  border-bottom: 1px solid var(--color-border-primary);
  li {
    display: inline-block;
    margin: var(--spacing-0) var(--spacing-3) var(--spacing-0) var(--spacing-0);
  }
  span {
    ${button};
    background-color: transparent;
    border: none;
    padding: var(--spacing-2) var(--spacing-0);
  }
  .active {
    border-bottom: 2px solid var(--color-text);
    font-weight: bold;
  }
`
